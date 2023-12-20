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
        for (const sensitiveIngredient of sensitiveIngredients) {
            const sensitiveIngredientLower = sensitiveIngredient.toLowerCase();
            const recipeIngredientsLower = recipe.ingredients.map(ing => ing.toLowerCase());
            if (recipeIngredientsLower.includes(sensitiveIngredientLower)) {
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
