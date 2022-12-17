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
  Preview,
} from "../components/Forms";

import { useMutation } from "@apollo/client";
import { SAVE_RESUME } from "../utils/mutations";

import { loadStripe } from "@stripe/stripe-js";
import { QUERY_CHECKOUT } from "../utils/queries";
import { useLazyQuery } from "@apollo/client";
import "./formController.css";
const stripePromise = loadStripe(
  "pk_test_51MEcXfKCu6tOY76M3glH98vnG12XLfoyY7tA9sT5APZOwtj6LnhXMPiatC5I8BealmLrL3ejoUoLVU2Se51Caoty00ul1ZAgr5"
);

// function to render the form sections
const FormController = () => {
  const [form] = Form.useForm();

  let finalFormObject = {};
  // state variables
  const [current, setCurrent] = useState(0);
  const [userData, setUserData] = useState({});

  //mutations
  const [addResumeToDB] = useMutation(SAVE_RESUME);

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
      content: <Preview resume={userData} />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  useEffect(() => {
    console.log(userData);
    // setUserData(userData);
  });

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const doneBtnHandler = async () => {
    getCheckout();
  };

  // helper function to clean and prepare the data for the API call once the Download button is clicked
  const prepDataForApiCall = (data) => {
    // this large function does two things: returns an array of strings for the input fields that need it, and
    console.log(`RUNNING ${data.firstName}`);
    // run form.getFieldValue("startDateMonthExperience").format("MMMM") to get the month value from the form instance
    // do the same for all start and end months and years (8)
    // make array of strings out of text area for languages, ect...

    console.log(data);

    const returnArrayOfStrings = (string) => {
      // if user inputted nothing, do nothing
      if (!string) {
        return [];
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

    console.log(dateFields[7])

    // const firstName = data.firstName

    // resumeObject variable to converge the frontend data object with the backend models by mimicking the format of resumedata.js
    let resumeObject = {
      personalInfo: {
        // firstName NOT BEING RENDERED IN PREVIEW
        firstName: data.firstName,
        lastName: data.lastName,
        // address: // remove address field from Arthur's side
        city: data.cityPersonal,
        state: data.statePersonal,
        // zip: , // add zip field on Arthur's side
        phoneNumber: data.phone.toString(),
        email: data.professionalEmail,
        userGithub: data.github,
        linkedin: data.linkedin,
        // portfolio: data.portfolio,
      },
      // remove italics on summary text
      summary: data.summary,
      skills: {
        languages: data.languages,
        frameworks: data.frameworks,
        libraries: data.libraries,
        concepts: data.coreConcepts,
      },
      projects: [
        {
          name: data.projectNameOne,
          githubLink: data.githubRepoLinkOne,
          deployment: data.deployedApplicationLinkOne,
          summary: data.projectDescriptionOne,
          responsibility: data.yourRoleOne,
          technologies: data.toolsTechnologiesOne,
          // addAnother: data.addAnotherProject // potentially addAnother button here on my side
        },
        {
          name: data.projectNameTwo,
          githubLink: data.githubRepoLinkTwo,
          deployment: data.deployedApplicationLinkTwo,
          summary: data.projectDescriptionTwo,
          responsibility: data.yourRoleTwo,
          technologies: data.toolsTechnologiesTwo,
        },
        {
          name: data.projectNameThree,
          githubLink: data.githubRepoLinkThree,
          deployment: data.deployedApplicationLinkThree,
          summary: data.projectDescriptionThree,
          responsibility: data.yourRoleThree,
          technologies: data.toolsTechnologiesThree,
        },
      ],
      experiences: [
        {
          // change order? from Experience section to resumedata.js
          isCurrent: data.currentJob,
          title: data.jobTitle,
          company: data.companyName,
          city: data.cityExperience,
          state: data.stateExperience,
          summary: data.jobDescription,
          startDate: {
            // month NOT BEING RENDERED IN PREVIEW (but it's ok bc we're removing month)
            month: data.startDateMonthExperience,
            year: data.startDateYearExperience,
          },
          endDate: {
            // month NOT BEING RENDERED IN PREVIEW (but it's ok bc we're removing month)
            month: data.endDateMonthExperience,
            year: data.endDateYearExperience,
          },
        },
        // addAnother: data.addAnotherExperience // potentially addAnother button here on my side
      ],
      educations: [
        {
          degree: data.certificateDegreeName,
          // fieldOfStudy: // remove fieldOfStudy field on Arthur's side
          schoolName: data.universityInstitutionName,
          // city: data.cityEducation,
          // state: data.stateEducation,
          // isCurrent: // remove isCurrent field or add in Education.jsx
          startDate: {
            // month NOT BEING RENDERED IN PREVIEW (but it's ok bc we're removing month)
            month: data.startDateMonthEducation,
            year: data.startDateYearEducation,
          },
          endDate: {
            // month NOT BEING RENDERED IN PREVIEW (but it's ok bc we're removing month)
            month: data.endDateMonthEducation,
            year: data.endDateYearEducation,
          },
          // addAnother: data.addAnotherEducation // potentially addAnother button here on my side
        },
      ],
    };

    console.log("data", data);

    // now that data is cleaned, give to state variable to change the state
    setUserData(resumeObject);
    finalFormObject = resumeObject;
  };

  //add the resume to the db
  const handleAddResume = async () => {
    console.log("meli", userData);
    try {
      // console.log("resumeData", resumeData)
      const updateDB = await addResumeToDB({
        variables: { resumeData: finalFormObject },
      });

      // setUserData(setUserData);
    } catch (err) {
      console.log("nope");
    }
  };

  const handlePreview = () => {
    // get all field values from the form and set equal to a variable
    const data = form.getFieldsValue(true);

    // give the data from all the form fields to the data-prepping function
    prepDataForApiCall(data);
  };

  const handleDownload = () => {
    doneBtnHandler();
    message.success("Your ResuMate is ready to download!");
  };

  return (
    <div className="flex-container flex-row">
      <Row justify="center" align="middle">
        <Col className="FormContainer">
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
                  handleAddResume();
                }}
              >
                Save & Preview
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
    </div>
  );
};

export default FormController;
