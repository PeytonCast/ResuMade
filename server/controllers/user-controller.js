const { User } = require('../models');
const { signToken } = require('../utils/auth');
const resume = require('../seeds/resume.json');
const createDocument = require('../utils/templates/template1.js');
const { Packer } = require("docx");

module.exports = {
    // Get all courses
    getPDFfile: async (req, res) => {
        const b64string = await Packer.toBase64String(createDocument(resume));
        res.setHeader('Content-Disposition', 'attachment; filename=ArthurDoc.docx');
        res.send(Buffer.from(b64string, 'base64'));
    },
};
