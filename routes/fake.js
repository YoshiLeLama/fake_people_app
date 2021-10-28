const express = require('express');
const { generateArrayOfFakes, generateStudent, generateAnimal } = require('../controllers/generators');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('fake', {});
});

router.get('/class', (req, res, next) => {
    res.render('class', {title: "Class", people: generateArrayOfFakes(req.query.count, generateStudent)});
});

router.get('/animals', (req, res ,next) => {
    res.render('animals', {title:"Animals", animals: generateArrayOfFakes(req.query.count, generateAnimal)});
})

module.exports = router;