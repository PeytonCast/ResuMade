import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
    me {
      _id
      email
      resumes {
        _id
        summary
      }
      username
    }
  }
`;

export const QUERY_RESUME = gql`
  query Resume($resumeId: ID!) {
    resume(resumeId: $resumeId) {
      _id
      _id
        educations {
          degree
          endDate {
            month
            year
          }
          fieldOfStudy
          schoolName
          startDate {
            month
            year
          }
        }
        experiences {
          city
          company
          title
          summary
          state
          isCurrent
          startDate {
            month
            year
          }
          endDate {
            month
            year
          }
        }
        personalInfo {
          city
          email
          firstName
          lastName
          linkedin
          phoneNumber
          state
          userGithub
        }
        projects {
          deployment
          githubLink
          name
          summary
          responsibility
          technologies
        }
        skills {
          libraries
          languages
          frameworks
          concepts
        }
        summary
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