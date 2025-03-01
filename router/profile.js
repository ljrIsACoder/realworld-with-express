const express = require('express');
const userController = require('../controller/user');

const router = express.Router();

router.get('/:username', userController.getUserProfile)

router.post('/:username/follow', userController.followUser)

router.delete('/:username/follow', userController.unfollowUser)

module.exports = router;
