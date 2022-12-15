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

export const QUERY_CHECKOUT = gql`
  query getCheckout($resume: ID!) {
    checkout(resume: $resume) {
      session
    }
  }
`;