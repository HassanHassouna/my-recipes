const sensitiveIngredientsObject = require('../config').sensitiveIngredientsObject;

class HelperFunctions {
    constructor() {
        this.data = {}
    }

    static filterData = (data) => {
        return data.map(recipe => {
            return {
                id: recipe.idMeal,
                ingredients: recipe.ingredients,
                title: recipe.title,
                thumbnail: recipe.thumbnail,
                href: recipe.href,
            }
        })
    }

    static applySensitivityFilters = (recipes, sensitiveIngredients) => {
        const filteredRecipes = recipes.filter(recipe => {
            const recipeIngredientsLower = recipe.ingredients.map(ing => ing.toLowerCase());

            for (const sensitiveIngredient of sensitiveIngredients) {
                const regex = new RegExp(sensitiveIngredient.replace(/\s/g, "\\s*"), "i");

                if (recipeIngredientsLower.some(ing => ing.match(regex))) {
                    return false;
                }
            }
            return true;
        });
        return filteredRecipes;
    }

    static pushSensitiveIngredients(sensitiveIngredients, sensitiveIngredient) {
        sensitiveIngredients.push(...sensitiveIngredient);
    }

    static checkIfSensitiveIngredientIsChecked(queriesFromClient, sensitiveIngredients) {
        Array.from(Object.keys(queriesFromClient)).forEach(key => {
            if (queriesFromClient[key] === 'true') {
                this.pushSensitiveIngredients(sensitiveIngredients, sensitiveIngredientsObject[key]);
            }
        })
    }

}

module.exports = {
    HelperFunctions
}
