const express = require('express');
const { generateAnimal, generatePerson, generateJSONOfFakes, generateArrayOfFakes } = require('../controllers/generators');
const router = express.Router();
const { setJSONContentType } = require('../controllers/api_utils');
const { countValidator } = require('../utils/api_validity');
const apiGenerateDebug = require('debug')('api:generate');

router.get('/animals', async (req, res, next) => {
    const count = countValidator(req.query.count);
    apiGenerateDebug("Generate %s fake animal%s.", count, (count > 1 ? 's' : ''));
    setJSONContentType(res);
    const content = await generateJSONOfFakes(count, generateAnimal);
    res.end(content); 
});

router.get('/people', async (req, res, next) => {
    let i = await generatePerson().catch((reason) => console.error(reason));
    console.log(i);
    const count = countValidator(req.query.count);
    apiGenerateDebug("Generate %s fake %s.", count, (count > 1 ? "people" : "person"));
    setJSONContentType(res);
    const content = await generateJSONOfFakes(count, generatePerson);
    res.end(content);
});

module.exports = router;