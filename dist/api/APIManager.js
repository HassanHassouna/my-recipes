class APIManagerRecipes {
    constructor() {
        this.data = {}
        this.dairy = $('#dairyIngredients')
        this.gluten = $('#glutenIngredients')
        this.vegan = $('#vegeterianIngredients')

    }

    getRecipesByIngredient(ingredient) {
        return $.get(`/api/recipes/${ingredient}`, {
            dairy: this.dairy.is(':checked'),
            gluten: this.gluten.is(':checked'),
            vegan: this.vegan.is(':checked')
        })
            .then(data => {
                this.data.recipes = data;
            })
    }
}

