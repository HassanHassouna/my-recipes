class APIManagerRecipes {
    constructor() {
        this.data = {}
    }

    getRecipesByIngredient(ingredient) {
        return $.get(`/api/recipes/${ingredient}`, (data) => {
            this.data.recipes = data
        })
    }


}

