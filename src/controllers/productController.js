// Placeholder functions for product management operations
// These functions will be replaced with actual logic for handling product data
// in a real application, such as database interactions.

//db
const db = require('../models/db');

//POST
// create Product
const create = (req, res) => {
    res.status(201).json({
        message: 'Create product placeholder',
        product: req.body
    });
};

//PUT
// update Product
const edit = (req, res) => {
    res.status(200).json({
        message: 'Edit product placeholder',
        product: req.body
    });
};

//DELETE
// delete Product
const deleteProduct = (req, res) => {
    res.status(200).json({
        message: 'Delete product placeholder',
        productId: req.params.id
    });
};

//GET
// retrieve single product
const getProduct = async (req, res) => {
    //delay test
    await db.delay(3000).then(() => {
        console.log('getProduct delay done');
    });
    res.status(200).json({
        message: 'Get product placeholder',
        productId: req.params.id
    });
};



module.exports = {
    create,
    edit,
    delete: deleteProduct,
    getProduct
};