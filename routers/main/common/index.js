const express = require('express');
const router = express.Router();

const { homePage } = require('./common');
router.get('/', homePage);

module.exports = router;