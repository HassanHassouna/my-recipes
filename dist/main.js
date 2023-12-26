const apiManager = new APIManagerRecipes()
const renderer = new RendererRecipes()
const search = $('#search')
const ingredientInput = $('#ingredient-input')
const recipeContainer = $('.recipe-container')
const sensitiveIngredients = $('#dairyIngredients, #glutenIngredients, #vegeterianIngredients')


const getRecipes = () => {
    const ingredient = ingredientInput.val();
    apiManager.getRecipesByIngredient(ingredient)
        .then(function () {
            renderer.renderData((apiManager.data.recipes));
        });
}

search.on('click', function () {
    getRecipes()
//     TODO: showing the error in alerts
});

recipeContainer.on('click', '.recipe-image', function () {
    const id = $(this).closest('.recipe').data().id
    const recipe = apiManager.data.recipes.find(r => r.id == id)
    alert(recipe.ingredients[0])
})

sensitiveIngredients.on('change', function () {
    getRecipes()
//     TODO: showing the error in alerts
});

