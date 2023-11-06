const express = require('express');
const router = express.Router();
const { authentication } = require('../middleware/authentication');
const { Category, Product } = require('../models/index.js');
const CategoryController = require('../controllers/CategoryController')

router.post('/', CategoryController.create);
router.delete('/:id', authentication, CategoryController.delete)
router.put('/:id', authentication, CategoryController.update)
router.get('/catwithprods', CategoryController.getAllCategoriesWithProducts)
router.get('/:id', CategoryController.getById)
router.get("/categoryname/:category_name", CategoryController.getByName);

module.exports = router;