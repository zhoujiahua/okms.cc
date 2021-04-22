const express = require('express');
const router = express.Router();

const { contentIndex, contentList } = require('./content');
router.get('/main', contentIndex);
router.get('/list', contentList);

module.exports = router;