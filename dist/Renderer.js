class RendererRecipes {

    renderData(data) {
        $('.recipe-container').empty();
        const source = $('#recipe-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({recipe: data});
        $('.recipe-container').append(newHTML);
    }
}
