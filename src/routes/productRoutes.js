const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

// POST 
// create Product
/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create a new product
 *     requestBody:
 *       description: Product data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product created successfully
 */
router.post('/', productController.create);

//PUT
// update Product
/**
 * @swagger
 * /products/{id}/edit:
 *   put:
 *     summary: Update an existing product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Product data to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product updated successfully
 */
router.put('/:id/edit', productController.edit);

//DELETE
// delete Product
/**
 * @swagger
 * /products/{id}/delete:
 *   delete:
 *     summary: Delete a product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 */
router.delete('/:id/delete', productController.delete);

//GET
// retrieve single product
/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Retrieve a single product
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single product
 */
router.get('/:id', productController.getProduct);   

module.exports = router;