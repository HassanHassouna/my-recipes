const {sensitiveIngredientsObject, restaurants} = require('../config');
const RandomChefGenerator = require('./faker')
const randomDetails = new RandomChefGenerator()


class HelperFunctions {
    static filterData = (data, giphyUrl) => {
        return data.map((recipe, index) => {
            const nameOfRestaurants = this.checkIfIdMealIsInRestaurants(recipe, restaurants);
            return {
                id: recipe.idMeal,
                ingredients: recipe.ingredients,
                title: recipe.title,
                thumbnail: giphyUrl[index].embed_url,
                href: recipe.href,
                chefName: randomDetails.getRandomChefFullName(),
                starRate: Math.floor(Math.random() * 5),
                nameOfRestaurants: nameOfRestaurants.length > 0 ? nameOfRestaurants : ['No restaurants found that includes this meal.']
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

    static checkIfIdMealIsInRestaurants(recipe, restaurants) {
        const idMeal = recipe.idMeal;
        let nameOfRestaurants = ''
        for (const restaurant of Object.keys(restaurants)) {
            if (restaurants[restaurant].ids.includes(idMeal)) {
                nameOfRestaurants += restaurant + ',';
            }
        }
        return nameOfRestaurants;
    }
}

module.exports = {
    HelperFunctions
}

