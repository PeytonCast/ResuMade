const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
const resolvers = {
    Query: {
        // get me 
        me: async (parent, args, context) => {
            // user Bearer {token}
            // select returns everything exept for the password and version
            if (context.user){
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
                return userData;
            
            }
            throw new AuthenticationError('You need to be logged in!'); 
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
          },
        
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          },

         saveResume: async (parent, { resumeData}, context) => {
            if(context.user){
                const updateUser = await User.findOneAndUpdate(

                    { _id : context.user._id},
                    { $push: {resumes: resumeData}},
                    { new: true }
                );
                console.log(resumeData.personalInfo)
                return updateUser;
            }
            throw new AuthenticationError('You need to be logged in.');
         }
    }
};
module.exports = resolvers;