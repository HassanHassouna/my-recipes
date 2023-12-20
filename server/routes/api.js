const express = require('express');
const router = express.Router();
const axios = require('axios');
const GETBYINGREDIENTS_URL = require('../../config').GETBYINGREDIENTS_URL;

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
            if (error.response) {
                res.status(error.response.status).send(error.response.data);
            } else {
                res.status(500).send(error.message);
            }
        })
});

module.exports = router;


