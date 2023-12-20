class APIManagerRecipes {
    constructor() {
        this.data = {}
    }

    getRecipesByIngredient(ingredient) {
        return $.get(`/api/recipes/${ingredient}`, {
            dairy: $('#dairyIngredients').is(':checked'),
            gluten: $('#glutenIngredients').is(':checked'),
            vegan: $('#vegeterianIngredients').is(':checked')
        })
            .then(data => {
                this.data.recipes = data;
            })
    }


}

