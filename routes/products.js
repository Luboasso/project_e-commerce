const express = require('express');
const router = express.Router();
const { authentication } = require('../middleware/authentication');

const ProductController = require('../controllers/ProductController')

router.post('/',authentication, ProductController.insert);
router.get('/', ProductController.getAll);
router.delete('/:id', authentication,ProductController.delete);
router.put('/id/:id',authentication, ProductController.update);
router.get("/id/:id",ProductController.getById);
router.get("/product_name/:product_name",ProductController.getByName);
router.get("/price/:price",ProductController.getPrice);
router.get("/orderprice",ProductController.getOrderedPrice);

module.exports = router;