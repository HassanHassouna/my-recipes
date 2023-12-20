const apiManager = new APIManagerRecipes()
const renderer = new RendererRecipes()


$('#search').on('click', function () {
    const ingredient = $('#ingredient-input').val();
    apiManager.getRecipesByIngredient(ingredient)
        .then(function () {
            renderer.renderData((apiManager.data.recipes));
        });
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
            renderer.renderData((apiManager.data.recipes));
        });
});
