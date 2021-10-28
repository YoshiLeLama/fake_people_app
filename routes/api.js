const express = require('express');
const { generateArrayOfFakes, generateAnimal, generateStudent } = require('../controllers/generators');
const router = express.Router();
const _ = require('lodash');
const { random } = require('lodash');

router.get('/animals', (req, res, next) => {
    console.log(req.query);
    res.setHeader('Content-Type', 'application/json');
    res.end(generateArrayOfFakes(req.query.count, generateAnimal)); 
});

router.get('/class', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(generateArrayOfFakes(req.query.count, generateStudent));
});

module.exports = router;