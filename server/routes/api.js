const express = require('express');
const router = express.Router();
const axios = require('axios');
const {GETBYINGREDIENTS_URL, dairyIngredients, glutenIngredients} = require('../../config')
const {filterData, applySensitivityFilters} = require('../../utils/helperFunctions')


router.get('/recipes/:ingredient', function (req, res) {
    const ingredient = req.params.ingredient;
    axios.get(`${GETBYINGREDIENTS_URL}${ingredient}`)
        .then(response => {
            const sensitiveIngredients = [];
            const filteredData = filterData(response.data.results);
            if (req.query.dairy === 'true') {
                sensitiveIngredients.push(...dairyIngredients);
            }
            if (req.query.gluten === 'true') {
                sensitiveIngredients.push(...glutenIngredients);
            }
            const filteredDataWithFilters = applySensitivityFilters(filteredData, sensitiveIngredients);
            res.send(filteredDataWithFilters);
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


