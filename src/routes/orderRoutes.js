const express = require('express');

const router = express.Router();

const orderController = require('../controllers/orderController');

// POST 
// create Order
/**
 * @swagger
 * /order:
 *   post:
 *     summary: Create a new order
 *     requestBody:
 *       description: Order data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Order created successfully
 */
router.post('/', orderController.create);
// append Cart
/*
    This method will create a new order object that specifies a "Order Not Commited" status
    Order objects without a Not Committed status are considered part of a user "cart"
*/
/**
 * @swagger
 * /order/cart:
 *   post:
 *     summary: Append to cart (create a new order object with "Order Not Committed" status)
 *     requestBody:
 *       description: Order data to append to cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Cart appended successfully
 */
router.post('/cart', orderController.appendCart);

// PUT
// update Order
/**
 * @swagger
 * /order/{id}/update:
 *   put:
 *     summary: Update an existing order
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Order data to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               items:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Order updated successfully
 */
router.put('/:id/update', orderController.update);

// DELETE
// delete Order
/**
 * @swagger
 * /order/{id}/delete:
 *   delete:
 *     summary: Delete an order
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order deleted successfully
 */
router.delete('/:id/delete', orderController.delete);

// GET
// retrieve single order
/**
 * @swagger
 * /order/{id}:
 *   get:
 *     summary: Retrieve a single order
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the order to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single order
 */
router.get('/:id', orderController.getOrder);
// retrieve User Carts
/**
 * @swagger
 * /order/cart:
 *   get:
 *     summary: Retrieve user carts
 *     responses:
 *       200:
 *         description: User carts retrieved successfully
 */
router.get('/cart', orderController.getUserCarts);


module.exports = router;