import React from "react";
import docSaver from "file-saver";
import createDocument from "../components/Templates/template.js";
const { Packer } = require("docx");

const resume = require("../components/Templates/resumedata");

const Payment = async () => {
  const resumeBlob = await Packer.toBlob(createDocument(resume));
  docSaver.saveAs(
    resumeBlob,
    `${resume.personalInfo.firstName} ${resume.personalInfo.lastName}.docx`
  );
  setTimeout(() => {
    window.location.assign("/dashboard");
  }, 3000);

  return (
    <div>
      <h1>Success!</h1>
      <h2>Thank you for your purchase!</h2>
      <h2>Your resume docx file is in your download folder.</h2>
      <h2>You will now be redirected to your dashboard.</h2>
    </div>
  );
};

export default Payment;
