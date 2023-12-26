const GETBYINGREDIENTS_URL = "https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient"
const dairyIngredients = ["Cream", "Cheese", "Milk", "Butter", "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"]
const glutenIngredients = ["Flour", "Bread", "spaghetti", "Biscuits", "Beer"]
const vegeterianIngredients = ["tomato", "Onion", "garlic"]
const sensitiveIngredientsObject = {
    dairy: dairyIngredients,
    gluten: glutenIngredients,
    vegan: vegeterianIngredients
}

const restaurants = {
    chentro: {
        ids: ["52815", "52897", "52937"]
    },
    zaki: {
        ids: ["52878", "52908", "52909"]
    },
    kafroon: {
        ids: ["52776", "52972"]
    },
    kalamata: {
        ids: ["52973", "52772"]
    },
    Jamican: {
        ids: ["52937", "52944"],
    },
    French: {
        ids: ["52908", "52776", "52909", "52910"]
    },
    Italian: {
        ids: ["52849", "52961", "52771", "52770"]
    },
    American: {
        ids: ["52858", "52857", "52856", "52817", "52818"]
    }

}

module.exports = {
    GETBYINGREDIENTS_URL,
    sensitiveIngredientsObject,
    restaurants
}

