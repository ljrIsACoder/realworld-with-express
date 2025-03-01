const express = require('express');

const router = express.Router();

router.use('/', require('./user.js'));

router.use('/profiles', require('./profile.js'));

router.use('/articles', require('./article.js'));

router.use('/tags', require('./tag.js'));

module.exports = router;