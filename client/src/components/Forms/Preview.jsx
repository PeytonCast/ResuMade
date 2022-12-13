import React from "react";
import Template from '../Templates/template.jsx';

const Preview =  ({ resume }) => {
    return (
        <div id='resumePreview'>
            <Template resume={resume} />
        </div>
    )
};

export default Preview;