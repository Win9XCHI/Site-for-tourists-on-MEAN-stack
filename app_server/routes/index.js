var express = require('express');
var router = express.Router();
var cntr = require('../controllers/main')

/* GET home page. */
router.get('/', cntr.HomePage);
router.get('/Details', cntr.DetailPage);

module.exports = router;
