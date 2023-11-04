const express = require('express');
const router = express.Router();
const { authentication } = require('../middleware/authentication');

const ProductController = require('../controllers/ProductController')

router.post('/', ProductController.insert);
router.get('/', authentication, ProductController.getAll);
router.delete('/:id', ProductController.delete)
router.put('/id/:id', ProductController.update)
// router.post('/login', ProductController.login)
// router.delete('/logout',authentication,ProductController.logout)

module.exports = router;