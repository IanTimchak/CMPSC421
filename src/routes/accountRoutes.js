const express = require('express');

const router = express.Router();

const accountController = require('../controllers/accountController');

//account creation (signup) handled in authRoutes

//PUT
// update Product
router.put('/:id/edit', accountController.edit);

//DELETE
// delete Product
router.delete('/:id/delete', accountController.delete);

//GET
// retrieve single product
router.get('/:id', accountController.getUser);

module.exports = router;