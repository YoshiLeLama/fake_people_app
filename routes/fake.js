const { default: axios } = require('axios');
const express = require('express');
const { generateArrayOfFakes, generatePerson, generateAnimal } = require('../controllers/generators');
const { countValidator } = require('../utils/api_validity');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('fake', {});
});

router.get('/people', async (req, res, next) => {
    res.render('people', {title: "People", people: generateArrayOfFakes(countValidator(req.query.count), generatePerson)});
});

router.get('/animals', async (req, res ,next) => {
    axios.get(`localhost:3000/api/animals?count=${req.query.count}`).then(value => {
        console.log('hello')
        res.render('animals', {title:"Animals", animals: JSON.parse(value)});
    })
})

module.exports = router;