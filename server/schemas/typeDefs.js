const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        resumes: [Resume]
    }
    type Date {
        month: Int
        year: Int
      }

    input InputDate {
        month: Int
        year: Int
      }

    type PersonalInfo {
        firstName: String!
        lastName: String!
        city: String!
        state: String!
        phoneNumber: String!
        email: String!
        userGithub: String!
        linkedin: String!
        
        
    }
    type SkillInfo {
        languages: [String]
        frameworks: [String]
        libraries:[String]
        concepts: [String]
    }

    type ProjectInfo {
        githubLink: String
        name: String
        deployment: String
        summary: String
        responsibility: String
        technologies: [String]

    }
    type ExperienceInfo  {
        isCurrent: Boolean
        title: String
        company: String
        city: String
        state: String
        summary: String
        startDate: Date
        endDate: Date
    }
    
    type EduInfo {
        degree: String
        fieldOfStudy: String
        schoolName: String
        startDate: Date
        endDate: Date
        
    }

    type Resume {
        _id: ID
        personalInfo: PersonalInfo
        summary: String
        skills: SkillInfo
        projects: [ProjectInfo]
        experiences: [ExperienceInfo]
        educations: [EduInfo]
    }

    type Auth {
        token: ID!
        user: User
      }

    type Checkout {
        session: ID
    }
    
    type Query {
        me: User
        checkout(resumeId: ID!): Checkout
      }

    input InputPersonalInfo {
        firstName: String!
        lastName: String!
        city: String!
        state: String!
        phoneNumber: String!
        email: String!
        userGithub: String!
        linkedin: String!
      }

    input InputSkillInfo {
        languages: [String]
        frameworks: [String]
        libraries:[String]
        concepts: [String]
    }

    input InputProjectInfo {
        githubLink: String
        name: String
        deployment: String
        summary: String
        responsibility: String
        technologies: [String]

    }
    input InputExperienceInfo  {
        isCurrent: Boolean
        title: String
        company: String
        city: String
        state: String
        summary: String
        startDate: InputDate
        endDate: InputDate
    }
    input InputEduInfo {
        degree: String
        fieldOfStudy: String
        schoolName: String
        startDate: InputDate
        endDate: InputDate
        
    }

    input InputResume {
        _id: ID
        personalInfo: InputPersonalInfo
        summary: String
        skills: InputSkillInfo
        projects: [InputProjectInfo]
        experiences: [InputExperienceInfo]
        educations: [InputEduInfo]
    }

    type Mutation{ 
        login(email: String!, password: String!): Auth
        saveResume(resumeData: InputResume!): User
        addUser(username: String!, email: String!, password: String!): Auth
        removeResume(_id : ID!): User
    }

`;

module.exports = typeDefs;
