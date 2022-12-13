import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
    me {
      _id
      email
      resumes {
        _id
        educations
        experiences
        personalInfo
        projects
        skills
        summary
      }
      username
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