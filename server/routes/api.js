const express = require('express');
const router = express.Router();
const GETBYINGREDIENTS_URL = "https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/"
const GETBYID_URL = "https://recipes-goodness-elevation.herokuapp.com/recipes/id/"
const axios = require('axios');


const filterData = (data) => {
    return data.map(recipe => {
        return {
            id: recipe.idMeal,
            ingredients: recipe.ingredients,
            title: recipe.title,
            thumbnail: recipe.thumbnail,
            href: recipe.href,
        }
    })
}

router.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient;
    axios.get(`${GETBYINGREDIENTS_URL}${ingredient}`)
        .then(response => {
            const filteredData = filterData(response.data.results);
            res.send(filteredData);
        })
        .catch(error => {
            console.log(error);
        });
});

module.exports = router;
