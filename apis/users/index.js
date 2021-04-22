const express = require('express');
const router = express.Router();

const { userLogin } = require('./users');
router.get('/login', userLogin)

module.exports = router;