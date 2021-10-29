const express = require('express');
const { generateArrayOfFakes, generatePerson, generateAnimal } = require('../controllers/generators');
const { countValidator } = require('../utils/api_validity');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('fake', {});
});

router.get('/people', (req, res, next) => {
    res.render('people', {title: "People", people: generateArrayOfFakes(countValidator(req.query.count), generatePerson)});
});

router.get('/animals', (req, res ,next) => {
    res.render('animals', {title:"Animals", animals: generateArrayOfFakes(countValidator(req.query.count), generateAnimal)});
})

module.exports = router;