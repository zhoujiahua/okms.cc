const express = require('express');
const router = express.Router();

const { adminPage } = require('./common');
router.get('/', adminPage);

module.exports = router;