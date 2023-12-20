class APIManagerRecipes {
    constructor() {
        this.data = {}
    }

    getRecipesByIngredient(ingredient) {
        return $.get(`/api/recipes/${ingredient}`, {
            dairy: $('#dairyIngredients').is(':checked'),
            gluten: $('#glutenIngredients').is(':checked')
        })
            .then(data => {
                this.data.recipes = data;
            })
    }


}

