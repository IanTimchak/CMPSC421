const express = require('express');
const accountController = require('../controllers/accountController');
const auth = require('../models/auth');

const router = express.Router();
/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Sign up a new user
 *     requestBody:
 *       description: User data to sign up
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User signed up successfully
 */
router.post('/signup', /*express.urlencoded({ extended: true }),*/ accountController.signup); //Uses urlencoded middleware

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in an existing user
 *     requestBody:
 *       description: User data to log in
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User logged in successfully
 */
router.post('/login', /*express.json(),*/ accountController.login); //Uses json middleware


//router.get('/retrievePayload', auth.retrievePayload); will be used for future authN

module.exports = router;