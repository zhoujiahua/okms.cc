const express = require('express');
const router = express.Router();

const { getUser, addInfo } = require('./users');
router.get('/getuser', getUser)
router.get('/addinfo', addInfo)

module.exports = router;