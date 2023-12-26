class RendererRecipes {
    constructor() {
        this.recipeContainer = $('.recipe-container')
        this.recipeTemplate = $('#recipe-template')
    }

    renderData(data) {
        this.recipeContainer.empty();
        const source = this.recipeTemplate.html();
        const template = Handlebars.compile(source);
        const newHTML = template({recipe: data});
        this.recipeContainer.append(newHTML);
    }
}
