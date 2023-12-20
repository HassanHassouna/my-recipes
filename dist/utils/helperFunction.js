function applySensitivityFilters(recipes) {
    const filteredRecipes = recipes.filter(recipe => {
        const sensitiveIngredients = [];

        if ($('#dairyIngredients').is(':checked')) {
            sensitiveIngredients.push(...dairyIngredients);
        }

        if ($('#glutenIngredients').is(':checked')) {
            sensitiveIngredients.push(...glutenIngredients);
        }

        for (const ingredient of sensitiveIngredients) {
            if (recipe.ingredients.includes(ingredient)) {
                return false;
            }
        }
        return true;
    });
    return filteredRecipes;
}

