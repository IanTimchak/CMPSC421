// Placeholder functions for order management operations
// These functions will be replaced with actual logic for handling order data
// in a real application, such as database interactions.

//db
const db = require('../models/db');

// POST
// create Order
const create = (req, res) => {
    res.status(201).json({
        message: 'Create order placeholder',
        order: req.body
    });
};

// append Cart
// This method will create a new order object that specifies a "Order Not Commited" status
const appendCart = (req, res) => {
    res.status(201).json({
        message: 'Append cart placeholder',
        order: req.body
    });
};

// PUT
// update Order
const update = (req, res) => {
    res.status(200).json({
        message: 'Update order placeholder',
        order: req.body
    });
};

// DELETE
// delete Order
const deleteOrder = (req, res) => {
    res.status(200).json({
        message: 'Delete order placeholder',
        orderId: req.params.id
    });
};

// GET
// retrieve single order
const getOrder = async (req, res) => {
    //delay test
    await db.delay(3000).then(() => {
        console.log('getOrder delay done');
    });
    res.status(200).json({
        message: 'Get order placeholder',
        orderId: req.params.id
    });
};
// retrieve User Carts
const getUserCarts = async (req, res) => {
    //delay test
    await db.delay(3000).then(() => {
        console.log('getUserCarts delay done');
    });
    res.status(200).json({
        message: 'Get user carts placeholder',
        userId: req.params.id
    });
};

module.exports = {
    create,
    appendCart,
    update,
    delete: deleteOrder,
    getOrder,
    getUserCarts
};