import React from "react";
import Template from "../Templates/template.jsx";
import "./forms.css";

const Preview = ({ resume }) => {
  return (
    <div id="resumePreview">
      <Template resume={resume} />
    </div>
  );
};

export default Preview;
