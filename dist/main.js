const apiManager = new APIManagerRecipes()
const renderer = new RendererRecipes()
const search = $('#search')
const ingredientInput = $('#ingredient-input')
const recipeContainer = $('.recipe-container')
const sensitiveIngredients = $('#dairyIngredients, #glutenIngredients, #vegeterianIngredients')
const nextPageBtn = $('#nextBtn')
const prevPageBtn = $('#prevBtn')

const getRecipes = () => {
    const ingredient = ingredientInput.val();
    apiManager.getRecipesByIngredient(ingredient)
        .then(function () {
            renderer.renderData(apiManager.data.recipes);
        })
        .catch(function (error) {
            alert(error)
        })

}

search.on('click', function () {
    getRecipes()
});

recipeContainer.on('click', '.recipe-image', function () {
    const id = $(this).closest('.recipe').data().id
    const recipe = apiManager.data.recipes.find(r => r.id == id)
    alert(recipe.ingredients[0])
})

sensitiveIngredients.on('change', function () {
    getRecipes()

});

nextPageBtn.on('click', async function () {
    const ingredient = ingredientInput.val();
    await apiManager.nextPage(ingredient);
    if (!apiManager.pagination.next) {
        nextPageBtn.attr('disabled', true)
    }
    if (apiManager.pagination.previous.page) {
        prevPageBtn.attr('disabled', false)
    }
    renderer.renderData(apiManager.data.recipes);
})

prevPageBtn.on('click', async function () {
    const ingredient = ingredientInput.val();
    await apiManager.prevPage(ingredient);
    if (!apiManager.pagination.previous) {
        prevPageBtn.attr('disabled', true)
    }
    if (apiManager.pagination.next) {
        nextPageBtn.attr('disabled', false)
    }
    renderer.renderData(apiManager.data.recipes);
})
