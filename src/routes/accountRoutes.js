const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

// POST 
// create Product
router.post('/', productController.create);

//PUT
// update Product
router.put('/:id/edit', productController.edit);

//DELETE
// delete Product
router.delete('/:id/delete', productController.delete);

//GET
// retrieve single product
router.get('/:id', productController.getProduct);

module.exports = router;