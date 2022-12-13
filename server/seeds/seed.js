const db = require('../config/connection');
const { User, Resume } = require('../models');
const { faker } = require('@faker-js/faker');

db.once('open', async () => {
 
  try {
    // clean database
    await User.deleteMany({});
// await User.create(userSeeds);
   // bulk create each model
    
   
   for (let i = 0; i < 10; i++) {
    const resume = [];

    let email = faker.internet.email();
    let username = faker.internet.userName();
    let month = Math.floor(Math.random()*12)
   
    for (let j = 0; j < 2; j++) {
      // const { _id, resume } = await Resume.create(2[j]);
      const updateUser = await User.findOneAndUpdate(
        // { resumes: resume },
        {
          $addToSet: {
            resumes: resume,
          },
        }
      );
      resume.push({
        personalInfo: {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          city: faker.address.cityName(),
          state: faker.address.state(),
          phoneNumber: faker.phone.number(),
          email: email,
          userGithub: username,
          linkedin: username
        },
        summary: faker.lorem.text(),
        skills: {
          languages: ["HTML", "CSS", "JavaScript", "Nodejs", "ExpressJS", "React", "MongoDB", "GraphSQL"],
          frameworks: ["Spring", "NodeJS", "AngularJS", "Vue JS" ],
          libraries: ["React", "Express", "Bootsrap"],
          concepts: ["Agile", "MEAN", "MERN", "Django"],
        },
        projects: {
          name: faker.company.bsBuzz(),
          githubLink: faker.internet.url(),
          deployment: faker.internet.url(),
          summary: faker.lorem.text(),
          responsibility: faker.name.jobDescriptor(),
          technologies: ["React", "Express", "Bootsrap"],
        },
        experiences: {
          isCurrent: faker.datatype.boolean() ,
        title: faker.name.jobTitle(),
        company: faker.company.companyName(),
        githubLink: faker.internet.url(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        summary: faker.name.jobDescriptor(),
        startDate: {
          month: month,
          year: 2014,
        }
        },
        educations: {
          degree: faker.name.jobArea(),
          fieldOfStudy: faker.name.jobArea(),
          schoolName: faker.company.companyName(),
          startDate: {
            month: month,
            year: 2010,
          },
          endDate: {
            month: month,
            year: 2014,
          }
        }          
      });
    };

    let user = {
      username: username,
      email: email,
      password: email,
      resumes: resume
    }
  console.log(user);
   const newUser = await User.create(user);
  }
  


  console.log('Seeding complete! 🌱');
  process.exit(0);
  
    
  } catch (err) {
    throw err;
  }
});