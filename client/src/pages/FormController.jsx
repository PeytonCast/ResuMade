// import necessary components from React and Ant Design
import React, { useState, useEffect } from "react";
import { Button, Col, ConfigProvider, Form, message, Row, Steps } from "antd";
import {
  UserInfo,
  Summary,
  TechnicalSkills,
  Projects,
  Experience,
  Education,
  Preview,
} from "../components/Forms";

import { useQuery, useMutation } from "@apollo/client";
import { SAVE_RESUME, EDIT_RESUME } from "../utils/mutations";
import { useSearchParams, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { QUERY_CHECKOUT, QUERY_ME, QUERY_RESUME } from "../utils/queries";
import { useLazyQuery } from "@apollo/client";
import { getMergedStatus } from "antd/es/_util/statusUtils";
const stripePromise = loadStripe(
  "pk_test_51MEcXfKCu6tOY76M3glH98vnG12XLfoyY7tA9sT5APZOwtj6LnhXMPiatC5I8BealmLrL3ejoUoLVU2Se51Caoty00ul1ZAgr5"
);

const buttomItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 14,
      offset: 12,
    },
  },
};

// function to render the form sections
const FormController = () => {
  const [form] = Form.useForm();
  // const { resumeId: resumeId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  let isEdit = searchParams.get("resumeId") ? true : false;

  const {
    loading: loadingResume,
    error: resumeError,
    data: resumeData,
    refetch: refetch,
  } = useQuery(QUERY_RESUME, {
    skip: !isEdit,
    variables: { resumeId: searchParams.get("resumeId") },
  });
  let isPaidResume = resumeData?.resume.isPaid;

  if (isEdit) {
    refetch();
  }

  let finalFormObject = {};

  // state variables
  const [current, setCurrent] = useState(0);
  const [userData, setUserData] = useState({});

  //mutations
  const [editResumeToDB] = useMutation(EDIT_RESUME);
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
      content: <UserInfo preload={resumeData?.resume} />,
    },
    {
      title: "Summary",
      content: <Summary preload={resumeData?.resume} />,
    },
    {
      title: "Technical Skills",
      content: <TechnicalSkills preload={resumeData?.resume} />,
    },
    {
      title: "Projects",
      content: <Projects preload={resumeData?.resume} />,
    },
    {
      title: "Experience",
      content: <Experience preload={resumeData?.resume} />,
    },
    {
      title: "Education",
      content: <Education preload={resumeData?.resume} />,
    },
    {
      title: "Preview",
      content: <Preview resume={userData} />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [resumeId, saveResumeId] = useState("");

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  // helper function to clean and prepare the data for the API call once the Download button is clicked
  const prepDataForApiCall = (data) => {
    // this large function does two things: returns an array of strings for the input fields that need it, and formats the date when user inputs a year
    console.log(`RUNNING ${data.firstName}`);
    // run form.getFieldValue("startDateMonthExperience").format("MMMM") to get the month value from the form instance
    // do the same for all start and end months and years (8)
    // make array of strings out of text area for languages, ect...

    const returnArrayOfStrings = (string) => {
      // if user inputted nothing, do nothing
      if (!string) {
        return [];
      }
      // otherwise, split the user's input (one long string) into separate words and return an array with the .split() string method
      return string.split(",").map((element) => element.trim());
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
      "endDateYearEducation",
      "endDateYearExperienceOne",
      "endDateYearExperienceTwo",
      "endDateYearExperienceThree",
      "startDateYearEducation",
      "startDateYearExperienceOne",
      "startDateYearExperienceTwo",
      "startDateYearExperienceThree",
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

    let projectsData = [];
    // assume if user fill project Name they are gonna fill the rest !
    let project1 = typeof data.projectNameOne === "undefined"?null:{
      name: data.projectNameOne,
      githubLink: data.githubRepoLinkOne,
      deployment: data.deployedApplicationLinkOne,
      summary: data.projectDescriptionOne,
      responsibility: data.yourRoleOne,
      technologies: data.toolsTechnologiesOne,
    };
    let project2= typeof data.projectNameTwo === "undefined"?null:{
      name: data.projectNameTwo,
      githubLink: data.githubRepoLinkTwo,
      deployment: data.deployedApplicationLinkTwo,
      summary: data.projectDescriptionTwo,
      responsibility: data.yourRoleTwo,
      technologies: data.toolsTechnologiesTwo,
    };
    let project3= typeof data.projectNameThree === 'undefined'?null:{
      name: data.projectNameThree,
      githubLink: data.githubRepoLinkThree,
      deployment: data.deployedApplicationLinkThree,
      summary: data.projectDescriptionThree,
      responsibility: data.yourRoleThree,
      technologies: data.toolsTechnologiesThree,
    };
    if (project1 !== null) projectsData.push(project1);
    if (project2 !== null) projectsData.push(project2);
    if (project3 !== null) projectsData.push(project3);

    let experiencesData = [];
    let exp1 =typeof data.jobTitleOne === "undefined"?null:{
        isCurrent: data.currentJobOne,
        title: data.jobTitleOne,
        company: data.companyNameOne,
        city: data.cityExperienceOne,
        state: data.stateExperienceOne,
        summary: data.jobDescriptionOne,
        startDate: {
          year: data.startDateYearExperienceOne,
        },
        endDate: {
          year: data.endDateYearExperienceOne,
        },
      };
    let exp2 =typeof data.jobTitleTwo === "undefined"?null:{
        isCurrent: data.currentJobTwo,
        title: data.jobTitleTwo,
        company: data.companyNameTwo,
        city: data.cityExperienceTwo,
        state: data.stateExperienceTwo,
        summary: data.jobDescriptionTwo,
        startDate: {
          year: data.startDateYearExperienceTwo,
        },
        endDate: {
          year: data.endDateYearExperienceTwo,
        },
      };
    let exp3 =typeof data.jobTitleThree === "undefined"?null:{
        isCurrent: data.currentJobThree,
        title: data.jobTitleThree,
        company: data.companyNameThree,
        city: data.cityExperienceThree,
        state: data.stateExperienceThree,
        summary: data.jobDescriptionThree,
        startDate: {
          year: data.startDateYearExperienceThree,
        },
        endDate: {
          year: data.endDateYearExperienceThree,
        },
      };
      if (exp1 !== null) experiencesData.push(exp1);
      if (exp2 !== null) experiencesData.push(exp2);
      if (exp3 !== null) experiencesData.push(exp3);
      console.log("experience DataL :", experiencesData);

    // resumeObject variable to converge the frontend data object with the backend models by mimicking the format of resumedata.js
    let resumeObject = {
      personalInfo: {
        firstName: typeof data.firstName === 'undefined'?"":data.firstName,
        lastName: typeof data.lastName === 'undefined'?"":data.lastName,
        city: typeof data.cityPersonal === 'undefined'?"":data.cityPersonal,
        state: typeof data.statePersonal === 'undefined'?"":data.statePersonal,
        zip: typeof data.zip === 'undefined'?"":data.zip,
        phoneNumber: typeof data.phone === 'undefined'?"":data.phone,
        email: typeof data.professionalEmail === 'undefined'?"":data.professionalEmail,
        userGithub: typeof data.github === 'undefined'?"":data.github,
        linkedin: typeof data.linkedin === 'undefined'?"":data.linkedin,
        portfolio: typeof data.portfolio === 'undefined'?"":data.portfolio,
      },
      summary: typeof data.summary === 'undefined'?"":data.summary,
      skills: {
        languages:  typeof data.languages === 'undefined'?"":data.languages,
        frameworks:  typeof data.frameworks === 'undefined'?"":data.frameworks,
        libraries:  typeof data.libraries === 'undefined'?"":data.libraries,
        concepts:  typeof data.coreConcepts === 'undefined'?"":data.coreConcepts,
      },
      projects: projectsData,
      experiences: experiencesData,
      educations: [
        {
          degree: data.certificateDegreeName,
          schoolName: data.universityInstitutionName,
          city: data.cityEducation,
          state: data.stateEducation,
          startDate: {
            year: data.startDateYearEducation,
          },
          endDate: {
            year: data.endDateYearEducation,
          },
        },
      ],
    };

    // now that data is cleaned, give to state variable to change the state
    setUserData(resumeObject);
    finalFormObject = resumeObject;
    console.log("resumeData", resumeData);
    console.log("daataa", finalFormObject);
  };

  const handleEditResume = async () => {
    try {
      if (searchParams) {
        finalFormObject.isPaid = resumeData.resume.isPaid;
        const updateResumeLS = await editResumeToDB({
          variables: {
            resumeId: resumeData.resume._id,
            resumeData: finalFormObject,
          },
        });
        saveResumeId(resumeData.resume._id);
      }
    } catch (err) {
      console.log(err);

      console.log("error edit");
    }
  };

  //add the resume to the db -Arthur
  const handleAddResume = async () => {
    try {
      // console.log("finalFormObject", finalFormObject)

      const addResume = await addResumeToDB({
        variables: { resumeData: finalFormObject },
      });

      const newResumeId =
        addResume.data.saveResume.resumes[
          addResume.data.saveResume.resumes.length - 1
        ]._id;

      saveResumeId(newResumeId);
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
    console.log("newResumeId", resumeId);
    getCheckout({
      variables: { resumeId: resumeId },
    });
    message.success("Your ResuMate is ready to download!");
  };

  const handleRedirectDashboard = () => {
    window.location.assign('/dashboard');
  }

  return (
    <div className="main-container flex-container flex-row">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#141414",
          },
        }}
      >
        <Row type="flex" justify="center" align="top">
          <Col className="FormContainer">
            <Steps current={current} items={items} />

            <div className="steps-content">
              <Form form={form}>{steps[current].content}</Form>
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="center" gutter={[16, 16]}>
          <Col>
            {/* previous button */}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}

            {/* next button */}
            {current < steps.length - 2 && (
              <Button
                type="primary"
                style={{ margin: "0 8px" }}
                onClick={() => next()}
              >
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
                  if (isEdit) {
                    handleEditResume();
                  } else {
                    handleAddResume();
                  }
                }}
              >
                Save & Preview
              </Button>
            )}

            {/* done button */}
            {current === steps.length - 1 && !isPaidResume && (
              <Button type="primary" onClick={handleDownload}>
                Make A Payment
              </Button>
            )}

            {current === steps.length - 1 && isPaidResume && (
              <Button type="primary" onClick={handleRedirectDashboard}>
                Dashboard
              </Button>
            )}
          </Col>
        </Row>
      </ConfigProvider>
    </div>
  );
};

export default FormController;
