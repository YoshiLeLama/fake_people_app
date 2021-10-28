const express = require('express');
const { generateAnimals } = require('../controllers/generators');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const animals = {animals: generateAnimals(10)};
  console.log(animals);
  res.render('index', animals);
});

module.exports = router;
