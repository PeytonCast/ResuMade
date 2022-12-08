const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        userName: String!
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
        github: String!
        linkedin: String!
        
        
    }
    type SkillInfo {
        languages: [String]
        frameworks: [String]
        libraries:[String]
        concepts: [String]
    }

    type ProjectInfo {
        github: String
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
    }
    type EduInfo {
        degree: String
        fieldOfStudy: String
        schoolName: String
        startDate: Date
        endDate: Date
        
    }

    type Resume {
        _id: ID!
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
    
    type Query {
        me: User
      }

    input InputPersonalInfo {
        firstName: String!
        lastName: String!
        city: String!
        state: String!
        phoneNumber: String!
        email: String!
        github: String!
        linkedin: String!
        
        
    }
    input InputSkillInfo {
        languages: [String]
        frameworks: [String]
        libraries:[String]
        concepts: [String]
    }

    input InputProjectInfo {
        github: String
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
    }
    input InputEduInfo {
        degree: String
        fieldOfStudy: String
        schoolName: String
        startDate: InputDate
        endDate: InputDate
        
    }

    input InputResume {
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
