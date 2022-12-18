import React from "react";
import "./template.css";

function dateFormat(startDate, endDate, isCurrent) {
  const startDateText = startDate.year;
  const endDateText = isCurrent
    ? "Present"
    : `${endDate.year}`;
  return `${startDateText} - ${endDateText}`;
}

const Template = ({ resume }) => {
  return (
    <div id="template">
      <div className="aParagraph">
        <p className="name">
          {resume.personalInfo.firstName} {resume.personalInfo.lastName}
        </p>
        <p>
          <b>Location:</b> {resume.personalInfo.city},{" "}
          {resume.personalInfo.state},{" "} {resume.personalInfo.zip}| <b>Phone:</b>{" "}
          {resume.personalInfo.phoneNumber} | <b>Email:</b>{" "}
          {resume.personalInfo.email}
        </p>
        <p>
          <b>LinkedIn:</b> {resume.personalInfo.linkedin} | <b>GitHub:</b>{" "}
          {resume.personalInfo.userGithub} | <b>Portfolio:</b>{" "}
          {resume.personalInfo.portfolio}
        </p>
      </div>
      <div className="aParagraph">{resume.summary}</div>
      <div className="aParagraph">
        <p>
          <b>TECHNICAL SKILLS</b>
        </p>
        <p>
        <b>Languages:</b> {resume.skills.languages.join(", ")}{" "}
        </p>
        <p>
          <b>Frameworks:</b> {resume.skills.frameworks.join(", ")}{" "}
        </p>
        <p>
          <b>Libaries:</b> {resume.skills.libraries.join(", ")}{" "}
        </p>
        <p>
          <b>Core concepts:</b> {resume.skills.concepts.join(", ")}{" "}
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
                {school.degree}
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
