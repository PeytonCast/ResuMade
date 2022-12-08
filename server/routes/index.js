const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const { getPDFfile } = require('../controllers/user-controller.js');

router.use('/api', apiRoutes);

// Need to change this method to POST and include data in post method.
// data format: [personal info, summary, technical skills, projects, experience, education]
router.route('/').get(getPDFfile);

module.exports = router;