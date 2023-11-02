const express = require('express');
const router = express.Router();
// const { authentication } = require('../middleware/authentication');

const OrderController = require('../controllers/OrderController')

router.post('/', OrderController.create);
// router.get('/', authentication, OrderController.getAll)
// router.delete('/:id', authentication, OrderController.delete)
// router.put('/:id', authentication, OrderController.update)
// router.post('/login', OrderController.login)
// router.delete('/logout',authentication,OrderController.logout)

module.exports = router;