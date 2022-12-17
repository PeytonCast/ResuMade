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

export const EDIT_RESUME = gql `
mutation Mutation($resumeId: ID!, $resumeData: InputResume!) {
  editResume(resumeId: $resumeId, resumeData: $resumeData) {
      resumes {
        _id
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
  }
`

export const REMOVE_RESUME = gql`
    mutation Mutation($id: ID!) {
        removeResume(_id: $id) {
            resumes {
                _id
            }
        }
    }
  
`

export const SAVE_RESUME = gql`
  mutation SaveResume($resumeData: InputResume!) {
    saveResume(resumeData: $resumeData) {
      _id
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
    }
  }
`;