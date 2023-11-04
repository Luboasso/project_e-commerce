const express = require('express');
const router = express.Router();
const { authentication } = require('../middleware/authentication');

const OrderController = require('../controllers/OrderController')

router.post('/', authentication,OrderController.create);
router.get('/ordersandproducts', OrderController.getAllOrdersWithProducts);

module.exports = router;