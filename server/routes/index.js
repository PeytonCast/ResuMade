<<<<<<< HEAD
const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');
const { getPDFfile } = require('../controllers/user-controller.js');
=======
const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");
>>>>>>> c24f038dc873722e85eb2676cd78c0294b20dc9c

router.use("/api", apiRoutes);

<<<<<<< HEAD
// Need to change this method to POST and include data in post method.
// data format: [personal info, summary, technical skills, projects, experience, education]
router.route('/').get(getPDFfile);
=======
// router.use((req, res) => {
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });
>>>>>>> c24f038dc873722e85eb2676cd78c0294b20dc9c

module.exports = router;