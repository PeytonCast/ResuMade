import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const REMOVE_RESUME = gql`
  mutation Mutation($id: ID!) {
    removeResume(_id: $id) {
      _id
      resumes {
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
  }
`;

export const SAVE_RESUME = gql`
  mutation SaveResume($resumeData: InputResume!) {
    saveResume(resumeData: $resumeData) {
      _id
      resumes {
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
  }
`;
