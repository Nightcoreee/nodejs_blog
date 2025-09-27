const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/siteController');

router.get('/:slug', siteController.search);
router.use('/', siteController.index);

module.exports = router;
