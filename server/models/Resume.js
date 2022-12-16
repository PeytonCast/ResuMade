const { Schema, model } = require('mongoose')
const resumeSchema = {
    // this is an object with nested objects of the users personal information
    isPaid: {type: Boolean},
    personalInfo: {
        firstName: { type: String,
            required : true},

        lastName: { type: String,
            required : true},
        
        city: { type: String,
            required : true},

        state: { type: String,
            required : true},
            
        zip: { type: Number,
            required : true,
            
        },

        phoneNumber:{ type: Number,
            required: true},

        email:{ type: String,
            required: true},

        userGithub:{ type: String,
            required: true},

        linkedin:{ type: String,
            required: true},

        portfolio:{ type: String,
            required: true}
        
    },
    // this is an optional 2-3 paragraph that someone can summerize skills with
    summary: { type : String },

    // this is an object with nested arrays that decribe the skills of the user
    skills: {
        languages: [String],
        frameworks: [String],
        libraries:[String],
        concepts: [String]
    },

    //an array with nested object(s) a spot to store the users past project
    projects: [
        {
            name: {type:String},
            githubLink: {type:String},
            deployment: {type:String},
            summary: {type:String},
            responsibility: {type:String},
            technologies: [String]

        }
    ],

    // relivent work experiences past and current
    experiences: [
        {

            title: {type:String},
            company: {type:String},
            city: {type:String},
            state: {type:String},
            summary: {type:String},
            startDate:{
                year:{type: Number,}
              },
            endDate:{
                year:{type: Number,}
              },
        }
    ],
    // education experiences 
    educations: [
        {
            degree: {type:String},
            // fieldOfStudy: {type:String},
            schoolName: {type:String,
            required: true},
            startDate:{
                year:{type: Number,}
              },
            endDate:{
                year:{type: Number,}
              },
            city: {type:String},
            state: {type:String},
            
        },
    ]

}
module.exports = resumeSchema;