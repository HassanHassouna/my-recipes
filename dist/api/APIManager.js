class APIManagerRecipes {
    constructor() {
        this.data = {}
        this.dairy = $('#dairyIngredients')
        this.gluten = $('#glutenIngredients')
        this.vegan = $('#vegeterianIngredients')
        this.page = 1
        this.pagination = {}

    }

    getRecipesByIngredient(ingredient) {
        return $.get(`/api/recipes/${ingredient}`, {
            dairy: this.dairy.is(':checked'),
            gluten: this.gluten.is(':checked'),
            vegan: this.vegan.is(':checked'),
        })
            .then(data => {
                this.data.recipes = data;
            })
    }

    nextPage(ingredient) {
        this.page++
        return $.get(`/api/recipes/${ingredient}`, {
            page: this.page,
            dairy: this.dairy.is(':checked'),
            gluten: this.gluten.is(':checked'),
            vegan: this.vegan.is(':checked'),
        })
            .then(data => {
                this.data.recipes = data.results;
                this.pagination = data
            })
    }

    prevPage(ingredient) {
        this.page--
        return $.get(`/api/recipes/${ingredient}`, {
            page: this.page,
            dairy: this.dairy.is(':checked'),
            gluten: this.gluten.is(':checked'),
            vegan: this.vegan.is(':checked'),
        })
            .then(data => {
                this.data.recipes = data.results;
                this.pagination = data
            })
    }


}

