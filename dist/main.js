const apiManager = new APIManagerRecipes()
const renderer = new RendererRecipes()

const dairyIngredients = ["Cream", "Cheese", "Milk", "Butter", "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"]
const glutenIngredients = ["Flour", "Bread", "spaghetti", "Biscuits", "Beer"]

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

$('#search').on('click', function () {
    const ingredient = $('#ingredient-input').val();
    apiManager.getRecipesByIngredient(ingredient)
        .then(function () {
            const filteredRecipes = applySensitivityFilters(apiManager.data.recipes);
            renderer.renderData(filteredRecipes);
        })
});


$('.recipe-container').on('click', '.recipe-image', function () {
    const id = $(this).closest('.recipe').data().id
    const recipe = apiManager.data.recipes.find(r => r.id == id)
    alert(recipe.ingredients[0])
})

$('#dairyIngredients, #glutenIngredients').on('change', function () {
    const ingredient = $('#ingredient-input').val();
    apiManager.getRecipesByIngredient(ingredient)
        .then(function () {
            const filteredRecipes = applySensitivityFilters(apiManager.data.recipes);
            renderer.renderData(filteredRecipes);
        });
});
