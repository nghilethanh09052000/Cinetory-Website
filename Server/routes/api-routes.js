const express = require('express')
const router = express.Router();
const apiController = require('../controllers/api-controller');


router.get('/api',apiController.getApi)

module.exports = router;