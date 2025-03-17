// Placeholder functions for account management operations
// These functions will be replaced with actual logic for handling account data
// in a real application, such as database interactions.


//db
const db = require('../models/db');

// POST
// signup/login
const signup = (req, res) => {
    res.status(201).json({
        message: 'Signup placeholder',
        user: req.body
    });
};
const login = (req, res) => {
    res.status(200).json({
        message: 'Login placeholder',
        user: req.body
    });
};

// PUT
// update Account
const edit = (req, res) => {
    res.status(200).json({
        message: 'Edit account placeholder',
        user: req.body
    });
};

// DELETE
// delete Account
const deleteAccount = (req, res) => {
    res.status(200).json({
        message: 'Delete account placeholder',
        userId: req.params.id
    });
};

// GET
// retrieve single account
const getUser = async (req, res) => {
    //delay test
    await db.delay(3000).then(() => {
        console.log('getUser delay done');
    });
    res.status(200).json({
        message: 'Get user placeholder',
        userId: req.params.id
    });
};

module.exports = {
    signup,
    login,
    edit,
    delete: deleteAccount,
    getUser
};