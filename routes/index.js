var express = require('express');
const { generateCats } = require('../controllers/generate_animals');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const cats = {animals: generateCats(10)};
  console.log(cats);
  res.render('index', cats);
});

module.exports = router;
