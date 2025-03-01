const express = require('express');

const userController = require("../controller/user");
const userValidator = require('../validator/user')

const router = express.Router();

router.post('/users/login', userController.login);

router.post('/users', userValidator.register, userController.register);

router.get('/user', userController.getCurrentUser);

router.put('/user', userController.updateCurrentUser);

module.exports = router;