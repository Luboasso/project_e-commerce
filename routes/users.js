const express = require('express');
const router = express.Router();
const { authentication } = require('../middleware/authentication');

const UserController = require('../controllers/UserController')

router.post('/', UserController.create);
router.put('/:id', authentication, UserController.update)
router.post('/login', UserController.login)
router.delete('/logout',authentication,UserController.logout)
router.get('/user-info', authentication, UserController.getUserInfo)

module.exports = router;