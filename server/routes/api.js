const express = require('express');
const router = express.Router();
const axios = require('axios');
const {GETBYINGREDIENTS_URL, GIPHY_URL, API_KEY} = require('../../config')
const {
    HelperFunctions
} = require('../../utils/helperFunctions')

const PAGE_LIMIT = 5
let globalData = []

router.get('/recipes/:ingredient', async function (req, res) {
    const queriesFromClient = req.query;
    if (!req.query.page) {
        const ingredient = req.params.ingredient;
        let ingredientsResponse = await axios.get(`${GETBYINGREDIENTS_URL}/${ingredient}`)
        const sensitiveIngredients = [];
        let giphyResponse = await axios.get(`${GIPHY_URL}${ingredientsResponse.data.results.strCategory}&api_key=${API_KEY}`)
        const filteredData = HelperFunctions.filterData(ingredientsResponse.data.results, giphyResponse.data.data);
        HelperFunctions.checkIfSensitiveIngredientIsChecked(queriesFromClient, sensitiveIngredients);
        const filteredDataWithFilters = HelperFunctions.applySensitivityFilters(filteredData, sensitiveIngredients);
        globalData = filteredDataWithFilters
        res.send(filteredDataWithFilters.slice(0, PAGE_LIMIT))
    } else {

        const page = req.query.page || 1
        const startIndex = (page - 1) * PAGE_LIMIT
        const endIndex = page * PAGE_LIMIT
        const results = {}
        if (endIndex < globalData.length) {
            results.next = {
                page: parseInt(page) + 1,
                limit: PAGE_LIMIT
            }
        }
        if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: PAGE_LIMIT
            }
        }
        results.results = globalData.slice(startIndex, endIndex)
        res.send(results)
    }
});


module.exports = router;

