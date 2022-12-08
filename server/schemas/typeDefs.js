const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        resumes: [Resume]
    }

    type Resume: {
        _id: ID!
        personal_info: {
            firstName: String!
    
            lastName: String!
            
            city: String!
    
            state: String!
    
            phoneNumber: String!
    
            email: String!
    
            github: String!
    
            linkedin: String!
            
            phoneNumber: String!
            
        }
    
        summary: String
    
        skills: {
            languages: [String]
            frameworks: [String]
            libraries:[String]
            concepts: [String]
        },
    
        projects: [
            {
                name: String
                github: String
                name: String
                deployment: String
                summary: String
                responsibility: String
                technologies: [String]
    
            }
        ]
    
        experiences: [
            {
                isCurrent: Boolean
                title: String
                company: String
                city: String
                state: String
                summary: String
                startDate:{
                    month: Number
                    year: Number
                  }
            }
        ]

        educations: [
            {
                degree: String
                fieldOfStudy: String
                schoolName: String
                startDate:{
                    month: Number
                    year: Number
                  }
                endDate:{
                    month: Number
                    year: Number
                  }
                
            }
        ]
    
    }

    type Auth {
        token: ID!
        user: User
      }
    
    type Query {
        me: User
      }


    input inputResume {
        personal_info: {
            firstName: String!
            lastName: String!
            city: String!
            state: String!
            phoneNumber: String!
            email: String!
            github: String!
            linkedin: String!
            phoneNumber: String!
        }

        summary: String

        skills: {
            languages: [String]
            frameworks: [String]
            libraries:[String]
            concepts: [String]
        },

        projects: [
            {
                name: String
                github: String
                name: String
                deployment: String
                summary: String
                responsibility: String
                technologies: [String]
            }
        ]
    
        experiences: [
            {
                isCurrent: Boolean
                title: String
                company: String
                city: String
                state: String
                summary: String
                startDate:{
                    month: Number
                    year: Number
                  }
            }
        ]

        educations: [
            {
                degree: String
                fieldOfStudy: String
                schoolName: String
                startDate:{
                    month: Number
                    year: Number
                  }
                endDate:{
                    month: Number
                    year: Number
                  }
            }
        ]
    }

    type Mutation{ 
        login(email: String!, password: String!): Auth
        saveResume(resumeData: inputResume!): User
        addUser(username: String!, email: String!, password: String!): Auth
        removeBook(_id : ID!): User
    }

`;

module.exports = typeDefs;
