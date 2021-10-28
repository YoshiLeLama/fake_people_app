let express = require("express");
let router = express.Router();

router.get('/', (req, res, next) => {
    res.render('about', {title: "About this app", aboutDesc: "A little application that generates fake people and other stuff."});
});

module.exports = router;