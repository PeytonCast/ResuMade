import { gql } from '@apollo/client';

export const REMOVE_RESUME = gql`
mutation Mutation($resumeID: String!) {
    removeBook(resumeID: $resumeID) {
      savedBooks {
        resumeID
        authors
        description
        image
        link
        title
      }
    }}
  
`

export const ADD_RESUME = gql`
  mutation addResume($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;