const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const { getPDFfile } = require('../controllers/user-controller.js');

router.use('/api', apiRoutes);

router.route('/').get(getPDFfile);

module.exports = router;