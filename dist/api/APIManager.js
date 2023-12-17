class APIManagerRecipes {
    constructor() {
        this.data = {}
    }


    getRecipesByIngredient(ingredient) {
        return $.get(`/recipes/${ingredient}`, (data) => {
            this.data.recipes = data
        })
    }
    

}

