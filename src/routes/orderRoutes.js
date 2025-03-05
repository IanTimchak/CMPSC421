const express = require('express');

const router = express.Router();

const orderController = require('../controllers/orderController');

// POST 
// create Order
router.post('/', orderController.create);
// append Cart
/*
    This method will create a new order object that specifies a "Order Not Commited" status
    Order objects without a Not Committed status are considered part of a user "cart"
*/
router.post('/cart', orderController.appendCart);

// PUT
// update Order
router.put('/:id/update', orderController.update);

// DELETE
// delete Order
router.delete('/:id/delete', orderController.delete);

// GET
// retrieve single order
router.get('/:id', orderController.getOrder);
// retrieve User Carts
router.get('/cart', orderController.getUserCarts);


module.exports = router;