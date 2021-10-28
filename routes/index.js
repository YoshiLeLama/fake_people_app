const express = require('express');
const { generateArrayOfFakes, generateAnimal } = require('../controllers/generators');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {});
});

module.exports = router;
