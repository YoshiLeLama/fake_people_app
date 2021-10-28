const express = require('express');
const { generateAnimal, generatePerson, generateJSONOfFakes } = require('../controllers/generators');
const router = express.Router();
const { setJSONContentType } = require('../controllers/api_utils');
const { countValidator } = require('../utils/api_validity');
const apiGenerateDebug = require('debug')('api:generate');

router.get('/animals', (req, res, next) => {
    const count = countValidator(req.query.count);
    apiGenerateDebug("Generate %s fake animal%s.", count, (count > 1 ? 's' : ''));
    setJSONContentType(res);
    res.end(generateJSONOfFakes(count, generateAnimal)); 
});

router.get('/people', (req, res, next) => {
    const count = countValidator(req.query.count);
    apiGenerateDebug("Generate %s fake %s.", count, (count > 1 ? "people" : "person"));
    setJSONContentType(res);
    res.end(generateJSONOfFakes(count, generatePerson));
});

module.exports = router;