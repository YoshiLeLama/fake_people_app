const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('fake', {title: "Click on whatever you want to generate"});
})

module.exports = router;