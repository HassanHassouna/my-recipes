const filterData = (data) => {
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

const applySensitivityFilters = (recipes, sensitiveIngredients) => {
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

module.exports = {
    filterData,
    applySensitivityFilters
}
