import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
  me {
    _id
    email
    resumes {
      _id
      isPaid
      personalInfo {
        firstName
        lastName
        city
        state
        zip
        phoneNumber
        email
        userGithub
        linkedin
        portfolio
      }
      summary
      skills {
        languages
        frameworks
        libraries
        concepts
      }
      projects {
        githubLink
        name
        deployment
        summary
        responsibility
        technologies
      }
      experiences {
        title
        company
        city
        state
        summary
        startDate {
          year
        }
        endDate {
          year
        }
      }
      educations {
        degree
        schoolName
        city
        state
      }
    }
    username
  }
}
`;

export const QUERY_RESUME = gql`
  query Resume($resumeId: ID!) {
    resume(resumeId: $resumeId) {
      _id
      isPaid
      personalInfo {
        firstName
        lastName
        city
        state
        zip
        phoneNumber
        email
        userGithub
        linkedin
        portfolio
      }
      summary
      skills {
        languages
        frameworks
        libraries
        concepts
      }
      projects {
        githubLink
        name
        deployment
        summary
        responsibility
        technologies
      }
      experiences {
        title
        company
        city
        state
        summary
        startDate {
          year
        }
        endDate {
          year
        }
      }
      educations {
        degree
        schoolName
        city
        state
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout {
    checkout {
      session
    }
  }
`;