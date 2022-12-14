import React from "react";
import "./template.css";

function getMonthFromInt(value) {
  switch (value) {
    case 1:
      return "Jan";
    case 2:
      return "Feb";
    case 3:
      return "Mar";
    case 4:
      return "Apr";
    case 5:
      return "May";
    case 6:
      return "Jun";
    case 7:
      return "Jul";
    case 8:
      return "Aug";
    case 9:
      return "Sept";
    case 10:
      return "Oct";
    case 11:
      return "Nov";
    case 12:
      return "Dec";
    default:
      return "N/A";
  }
}

function dateFormat(startDate, endDate, isCurrent) {
  const startDateText =
    getMonthFromInt(startDate.month) + ". " + startDate.year;
  const endDateText = isCurrent
    ? "Present"
    : `${getMonthFromInt(endDate.month)}. ${endDate.year}`;

  return `${startDateText} - ${endDateText}`;
}

const Template = ({ resume }) => {
  console.log(resume);
  return (
    <div id="template">
      <div className="aParagraph">
        <p className="name">
          {resume.personalInfo.lastName}
          {resume.personalInfo.firstName}
        </p>
        <p>
          <b>Location:</b> {resume.personalInfo.city},{" "}
          {resume.personalInfo.state} | <b>Phone:</b>{" "}
          {resume.personalInfo.phoneNumber} | <b>Email:</b>{" "}
          {resume.personalInfo.email}
        </p>
        <p>
          <b>LinkedIn:</b> {resume.personalInfo.linkedin} | <b>GitHub:</b>{" "}
          {resume.personalInfo.github} | <b>Portfolio:</b>{" "}
          {resume.personalInfo.portfolio}
        </p>
      </div>
      <div className="aParagraph summary">{resume.summary}</div>
      <div className="aParagraph">
        <p>
          <b>TECHNICAL SKILLS</b>
        </p>
        <p>
          <b>Languages:</b> {resume.technicalSkills.languages.join(", ")}{" "}
        </p>
        <p>
          <b>Frameworks:</b> {resume.technicalSkills.frameworks.join(", ")}{" "}
        </p>
        <p>
          <b>Libaries:</b> {resume.technicalSkills.libraries.join(", ")}{" "}
        </p>
        <p>
          <b>Core concepts:</b> {resume.technicalSkills.concepts.join(", ")}{" "}
        </p>
      </div>
      <div className="aParagraph">
        <p>
          <b>PROJECTS</b>
        </p>
        {resume.projects.map((project) => (
          <>
            <p>
              <b>{project.name}</b> | {project.github} | {project.deployment}
            </p>
            <ul>
              <li>{project.summary}</li>
              <li>{project.responsibility}</li>
              <li>{project.technologies}</li>
            </ul>
          </>
        ))}
      </div>
      <div className="aParagraph">
        <p>
          <b>EXPERIENCES</b>
        </p>
        {resume.experiences.map((job) => (
          <>
            <p>
              <b>{job.title}</b>
              <span className="rightAllign">
                {dateFormat(job.startDate, job.endDate, job.isCurrent)}
              </span>
            </p>
            <p>
              {job.company}
              <span className="rightAllign">
                {job.city}, {job.state}
              </span>
            </p>
            <ul>
              <li>{job.summary}</li>
            </ul>
          </>
        ))}
      </div>
      <div className="aParagraph">
        <p>
          <b>EDUCATION</b>
        </p>
        {resume.educations.map((school) => (
          <>
            <p>
              <b>
                {school.degree} in {school.fieldOfStudy}
              </b>
              <span className="rightAllign">
                {dateFormat(school.startDate, school.endDate, school.isCurrent)}
              </span>
            </p>
            <p>
              {school.schoolName}
              <span className="rightAllign">
                {school.city}, {school.state}
              </span>
            </p>
          </>
        ))}
      </div>
    </div>
  );
};

export default Template;
