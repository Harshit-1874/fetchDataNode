const express = require('express');
const axios = require('axios');
const Product = require('../models/Product');
const router = express.Router();

// Fetch data from API and store in MongoDB
router.get('/fetchdata', async (req, res) => {
    try {
        const response = await axios.get('https://api.fake-rest.refine.dev/products');
        await Product.insertMany(response.data);
        res.send('Data fetched and stored in MongoDB');
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

// Get data by ID
router.get('/data/:id', async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id });
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

module.exports = router;
