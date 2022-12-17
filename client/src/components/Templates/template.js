const {
  Document,
  HeadingLevel,
  Paragraph,
  TabStopType,
  TextRun,
  AlignmentType,
  TabStopPosition,
} = require("docx");

export default function createDocument({
  personalInfo,
  summary,
  technicalSkills,
  projects,
  experiences,
  educations,
}) {
  return new Document({
    styles: {
      default: {
        heading1: {
          run: {
            size: 40,
            bold: true,
            font: "Open Sans",
          },
        },
        heading4: {
          run: {
            size: 22,
            font: "Open Sans",
          },
        },
      },
      paragraphStyles: [
        {
          id: "Heading2",
          name: "Heading 2",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: {
            size: 22,
            allCaps: true,
            font: "Open Sans",
            bold: true,
          },
          paragraph: {
            spacing: {
              before: 200,
            },
          },
        },
        {
          id: "Heading3",
          name: "Heading 3",
          basedOn: "Normal",
          next: "Normal",
          quickFormat: true,
          run: {
            size: 22,
            font: "Open Sans",
          },
          paragraph: {
            spacing: {
              before: 100,
            },
          },
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              left: 715,
              right: 715,
              bottom: 715,
              top: 715,
            },
          },
        },
        children: [
          nameHeader(personalInfo.firstName, personalInfo.lastName),
          personalInformation(
            personalInfo.city + ", " + personalInfo.state + personalInfo.zip,
            personalInfo.phoneNumber,
            personalInfo.email,
            personalInfo.linkedin,
            personalInfo.github,
            personalInfo.portfolio
          ),
          summaryStatement(summary),
          paragraphHeader("Technical Skills"),
          skillInformation(technicalSkills),
          paragraphHeader("Projects"),
          ...projects
            .map((project) => projectInformation(project))
            .reduce((prev, curr) => prev.concat(curr), []),
          paragraphHeader("Experiences"),
          ...experiences
            .map((job) => experienceInformation(job))
            .reduce((prev, curr) => prev.concat(curr), []),
          paragraphHeader("Education"),
          ...educations
            .map((education) => educationInformation(education))
            .reduce((prev, curr) => prev.concat(curr), []),
        ],
      },
    ],
  });
}

function nameHeader(firstName, lastName) {
  return new Paragraph({
    text: `${firstName} ${lastName}`,
    heading: HeadingLevel.HEADING_1,
  });
}
function personalInformation(
  address,
  phone,
  email,
  linkedIn,
  github,
  portfolio
) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_4,
    children: [
      new TextRun({
        text: `Location:`,
        bold: true,
      }),
      new TextRun({
        text: ` ${address} | `,
      }),
      new TextRun({
        text: `Phone:`,
        bold: true,
      }),
      new TextRun({
        text: ` ${phone} | `,
      }),
      new TextRun({
        text: `Email:`,
        bold: true,
      }),
      new TextRun({
        text: ` ${email}`,
      }),
      new TextRun({
        text: `LinkedIn:`,
        bold: true,
        break: 1,
      }),
      new TextRun({
        text: ` ${linkedIn} | `,
      }),
      new TextRun({
        text: `Github:`,
        bold: true,
      }),
      new TextRun({
        text: ` ${github} | `,
      }),
      new TextRun({
        text: `Portfolio:`,
        bold: true,
      }),
      new TextRun({
        text: ` ${portfolio}`,
      }),
    ],
  });
}

function summaryStatement(summary) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    children: [
      new TextRun({
        text: summary,
        italics: true,
      }),
    ],
  });
}

function paragraphHeader(subject) {
  return new Paragraph({
    text: subject,
    heading: HeadingLevel.HEADING_2,
  });
}

function skillInformation(skills) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_4,
    children: [
      new TextRun({
        text: "Languages: ",
        bold: true,
      }),
      new TextRun({
        text: skills.languages.join(", "),
      }),
      new TextRun({
        text: "Frameworks: ",
        bold: true,
        break: 1,
      }),
      new TextRun({
        text: skills.frameworks.join(", "),
      }),
      new TextRun({
        text: "Libraries: ",
        bold: true,
        break: 1,
      }),
      new TextRun({
        text: skills.libraries.join(", "),
      }),
      new TextRun({
        text: "Core concepts: ",
        bold: true,
        break: 1,
      }),
      new TextRun({
        text: skills.concepts.join(", "),
      }),
    ],
  });
}

function educationInformation(education) {
  return [
    itemHeader(
      `${education.degree} in ${education.fieldOfStudy}`,
      dateFormat(education.startDate, education.endDate, education.isCurrent)
    ),
    itemInfo(education.schoolName, `${education.city}, ${education.state}`),
  ];
}

function experienceInformation(job) {
  return [
    itemHeader(
      job.title,
      dateFormat(job.startDate, job.endDate, job.isCurrent)
    ),
    itemInfo(job.company, `${job.city}, ${job.state}`),
    itemDetail(job.summary),
  ];
}

function projectInformation(project) {
  return [
    new Paragraph({
      heading: HeadingLevel.HEADING_3,
      children: [
        new TextRun({
          text: project.name,
          bold: true,
        }),
        new TextRun({
          text: ` | ${project.github} | `,
        }),
        new TextRun({
          text: `${project.deployment}`,
        }),
      ],
    }),
    itemDetail(project.summary),
    itemDetail(project.responsibility),
    itemDetail(project.technologies.join(", ")),
  ];
}

function dateFormat(startDate, endDate, isCurrent) {
  const startDateText =
    getMonthFromInt(startDate.month) + ". " + startDate.year;
  const endDateText = isCurrent
    ? "Present"
    : `${getMonthFromInt(endDate.month)}. ${endDate.year}`;

  return `${startDateText} - ${endDateText}`;
}

function itemHeader(itemHeader, dateText) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    children: [
      new TextRun({
        text: itemHeader,
        bold: true,
      }),
      new TextRun({
        text: "\t" + dateText,
      }),
    ],
    tabStops: [
      {
        type: TabStopType.RIGHT,
        position: 10500,
      },
    ],
  });
}

function itemInfo(itemInfo, itemRight) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_4,
    children: [
      new TextRun({
        text: itemInfo,
      }),
      new TextRun({
        text: `\t${itemRight}`,
      }),
    ],
    tabStops: [
      {
        type: TabStopType.RIGHT,
        position: 10500,
      },
    ],
  });
}

function itemDetail(itemDetail) {
  return new Paragraph({
    bullet: {
      level: 0,
    },
    children: [
      new TextRun({
        text: itemDetail,
        font: "Open Sans",
        size: 22,
      }),
    ],
  });
}

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
