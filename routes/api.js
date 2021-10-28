const express = require('express');
const { generateArrayOfFakes, generateAnimal, generateStudent, generateJSONOfFakes } = require('../controllers/generators');
const router = express.Router();
const _ = require('lodash');
const { random } = require('lodash');
const { setJSONContentType } = require('../controllers/api_utils');

router.get('/animals', (req, res, next) => {
    console.log(req.query.count);
    setJSONContentType(res);
    res.end(generateJSONOfFakes(req.query.count, generateAnimal)); 
});

router.get('/class', (req, res, next) => {
    setJSONContentType(res);
    
    res.end(generateJSONOfFakes(req.query.count, generateStudent));
});

module.exports = router;