const express = require('express');

const router = express.Router();

const webPageController = require('../controllers/webPageController');

// Define your routes here
router.get('/', webPageController.index);

module.exports = router;