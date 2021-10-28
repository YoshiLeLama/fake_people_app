const express = require('express');
const { generateArrayOfFakes, generateAnimal } = require('../controllers/generators');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const animals = {animals: generateArrayOfFakes(10, generateAnimal)};
  console.log(animals);
  res.render('index', animals);
});

module.exports = router;
