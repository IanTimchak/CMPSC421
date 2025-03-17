const express = require('express');
const accountController = require('../controllers/accountController');
const auth = require('../models/auth');

const router = express.Router();
router.post('/signup', /*express.urlencoded({ extended: true }),*/ accountController.signup); //Uses urlencoded middleware
router.post('/login', /*express.json(),*/ accountController.login); //Uses json middleware
//router.get('/retrievePayload', auth.retrievePayload); will be used for future authN

module.exports = router;