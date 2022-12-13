// import necessary components from React and Ant Design
import React, { useState, useEffect } from "react";
import { Row, Col, Steps, Button, message, Form } from "antd";
import {
  UserInfo,
  Summary,
  TechnicalSkills,
  Projects,
  Experience,
  Education,
} from "../components/Forms";

// function to render the form sections
const FormController = () => {
  const [form] = Form.useForm();

  // state variables
  const [current, setCurrent] = useState(0);
  const [userData, setUserData] = useState({});

  // functions to make the next and previous buttons work
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  // 7 steps to the form including preview
  const steps = [
    {
      title: "Personal Info",
      content: <UserInfo />,
    },
    {
      title: "Summary",
      content: <Summary />,
    },
    {
      title: "Technical Skills",
      content: <TechnicalSkills />,
    },
    {
      title: "Projects",
      content: <Projects />,
    },
    {
      title: "Experience",
      content: <Experience />,
    },
    {
      title: "Education",
      content: <Education />,
    },
    {
      title: "Preview",
      // comment below line in when merged with Arthur's code
      // resume = Arthur's variable; userData = my state variable that has now changed with the prepped data
      // content: <Preview resume={userData}/>,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  useEffect(() => {
    console.log(userData);
  });

  // helper function to clean and prepare the data for the API call once the Done button is clicked (button may change to Preview and fire at the end of the 6th section - Education)
  const prepDataForApiCall = (data) => {
    // this large function does two things: returns an array of strings for the input fields that need it, and
    console.log("RUNNING");
    // run form.getFieldValue("startDateMonthExperience").format("MMMM") to get the month value from the form instance
    // do the same for all start and end months and years (8)
    // make array of strings out of text area for languages, ect...

    console.log(data);

    const returnArrayOfStrings = (string) => {
      // if user inputted nothing, do nothing
      if (!string) {
        return;
      }
      // otherwise, split the user's input (one long string) into separate words and return an array with the .split() string method
      return string.split(", ");
    };

    // these are the data field names that need to return an array of strings (if more, just add to this list)
    const stringListFields = [
      "languages",
      "libraries",
      "frameworks",
      "coreConcepts",
      "toolsTechnologies",
    ];

    // for each of the listed fields, use the .split() string method to separate the words and return an array
    stringListFields.forEach((prop) => {
      data[prop] = returnArrayOfStrings(data[prop]);
    });

    // function to format the dates
    const getDateFormat = (dateObject, format) => {
      if (!dateObject) {
        return;
      }
      return dateObject.format(format);
    };

    // these are the data field names that need to have dates formatted (if more, just add to this list)
    const dateFields = [
      "endDateMonthEducation",
      "endDateMonthExperience",
      "startDateMonthEducation",
      "startDateMonthExperience",
      "endDateYearEducation",
      "endDateYearExperience",
      "startDateYearEducation",
      "startDateYearExperience",
    ];

    // for each of the date fields, format according to if the field name includes "month" or "year"
    dateFields.forEach((prop) => {
      if (prop.includes("Month")) {
        data[prop] = getDateFormat(data[prop], "MMMM");
      } else if (prop.includes("Year")) {
        data[prop] = getDateFormat(data[prop], "YYYY");
      } else {
        return;
      }
    });

    console.log(data);

    // now that data is cleaned, give to state variable to change the state
    setUserData(data);
  };

  //
  const handlePreview = () => {
    // get all field values from the form and set equal to a variable
    const data = form.getFieldsValue(true);

    // give the data from all the form fields to the data-prepping function
    prepDataForApiCall(data);
  };

  const handleDownload = () => {
    message.success("Your ResuMate is ready to download!");
  };

  return (
    <Row justify="center" align="middle">
      <Col>
        <Steps current={current} items={items} />

        <div className="steps-content">
          <Form form={form}>{steps[current].content}</Form>
        </div>

        <div className="steps-action">
          {/* previous button */}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}

          {/* next button */}
          {current < steps.length - 2 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}

          {/* preview button */}
          {current === steps.length - 2 && (
            <Button
              type="primary"
              onClick={() => {
                next();
                handlePreview();
              }}
            >
              Preview
            </Button>
          )}

          {/* done button */}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={handleDownload}>
              Download
            </Button>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default FormController;
