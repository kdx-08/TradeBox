const express = require('express');
const router = express.Router();
const customController = require('../controllers/customController');

router.get('/', customController.getProducts);

router.get('/create', customController.createProduct);

router.get('/edit/:id', customController.editProduct);

module.exports = router;
