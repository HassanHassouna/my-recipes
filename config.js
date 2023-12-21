const GETBYINGREDIENTS_URL = "https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient"
const dairyIngredients = ["Cream", "Cheese", "Milk", "Butter", "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"]
const glutenIngredients = ["Flour", "Bread", "spaghetti", "Biscuits", "Beer"]
const vegeterianIngredients = ["tomato", "Onion", "garlic"]
const sensitiveIngredientsObject = {
    dairy: dairyIngredients,
    gluten: glutenIngredients,
    vegan: vegeterianIngredients
}
module.exports = {
    GETBYINGREDIENTS_URL,
    sensitiveIngredientsObject
}
