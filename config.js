const GETBYINGREDIENTS_URL = "https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient"
const GIPHY_URL = "http://api.giphy.com/v1/gifs/search?q="
const API_KEY = "VEJDL4I4Ou375umNFi2jrg9VQdlnQ1Vm"
const dairyIngredients = ["Cream", "Cheese", "Milk", "Butter", "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"]
const glutenIngredients = ["Flour", "Bread", "spaghetti", "Biscuits", "Beer"]
const vegeterianIngredients = ["Toor dal",
    "Water",
    "Salt",
    "Turmeric",
    "Ghee",
    "Chopped tomatoes",
    "Cumin seeds",
    "Mustard Seeds",
    "Bay Leaf",
    "Green Chili",
    "Ginger",
    "Cilantro",
    "Red Pepper",
    "Salt",
    "Sugar",
    "Garam Masala"]
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
const PORT = 3000;

module.exports = {
    GETBYINGREDIENTS_URL,
    sensitiveIngredientsObject,
    restaurants,
    PORT,
    GIPHY_URL,
    API_KEY
}

