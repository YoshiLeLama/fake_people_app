const express = require("express");
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('about', {title: "About this app", description: "A little application that generates fake people and other stuff."});
});

module.exports = router;