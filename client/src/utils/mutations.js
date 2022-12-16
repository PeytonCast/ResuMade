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
          phoneNumber
          email
          userGithub
          linkedin
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
          isCurrent
          title
          company
          city
          state
          summary
          startDate {
            month
            year
          }
          endDate {
            month
            year
          }
        }
        educations {
          degree
          fieldOfStudy
          schoolName
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

export const SET_PAID_TRUE = gql`mutation Mutation($id: ID!) {
  setPaidTrue(resumeId: $id) {
    _id
    email
    resumes {
      isPaid
      _id
    }
  }
}`

export const SAVE_RESUME = gql`
mutation SaveResume($resumeData: InputResume!) {
  saveResume(resumeData: $resumeData) {
    _id
    username
    email
    resumes {
      _id
      isPaid
      summary
      skills {
        concepts
        frameworks
        languages
        libraries
      }
      projects {
        deployment
        githubLink
        name
        responsibility
        summary
        technologies
      }
      personalInfo {
        city
        email
        firstName
        lastName
        linkedin
        phoneNumber
        portfolio
        state
        userGithub
        zip
      }
      experiences {
        title
        summary
        state
        startDate {
          year
        }
        
        endDate {
          year
        }
        company
        city
      }
      educations {
        startDate {
          year
        }
        schoolName
        endDate {
          year
        }
        degree
        city
        state
        
      }
    }
  }
}
`;