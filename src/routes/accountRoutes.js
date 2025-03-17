const express = require('express');

const router = express.Router();

const accountController = require('../controllers/accountController');

//account creation (signup) handled in authRoutes

//PUT
// update account
/**
 * @swagger
 * /accounts/{id}/edit:
 *   put:
 *     summary: Update an existing account
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the account to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Account data to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: Account updated successfully
 */
router.put('/:id/edit', accountController.edit);

//DELETE
// delete Account
/**
 * @swagger
 * /accounts/{id}/delete:
 *   delete:
 *     summary: Delete an account
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the account to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Account deleted successfully
 */
router.delete('/:id/delete', accountController.delete);

//GET
// retrieve single account
/**
    * @swagger
    * /account/{id}:
    *   get:
    *     summary: Retrieve a single user
    *     responses:
    *       200:
    *         description: a single user
    */
router.get('/:id', accountController.getUser);

module.exports = router;