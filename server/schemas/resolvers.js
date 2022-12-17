const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');
// setup stripe payment
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

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
        resume: async (parent, {resumeId}, context) => {
          // user Bearer {token}
          // select returns everything exept for the password and version
          if (context.user){
              const userData = await User.findOne({ _id: context.user._id })
              const resumeList = userData.resumes
              const foundResume = resumeList.find(obj => {
                return obj.id === resumeId
              })
              // if (foundResume === undefined) {
              //   throw new Error(`No resume found with id ${resumeId}`)
              // }
              return foundResume;

          }
          throw new AuthenticationError('You need to be logged in!');
      },
        checkout: async (parent, args, context) => {
          const url = new URL(context.headers.referer).origin;
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [ {
              price_data: {
                currency: 'usd',
                unit_amount: '500',
                product_data: {
                  name: "Resume"
                },
              }, 
              quantity: 1,
            }],
            mode: 'payment',
            success_url: `${url}/success`,
            cancel_url: `${url}/`
          });
          console.log("sessionid", session.id);
          return { session: session.id };
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            if (!username){
              console.log("username", username)
              throw new AuthenticationError('Need username');
            }

            if (!email){
              console.log("email", email)
              throw new AuthenticationError('Need email');
            }

            if (!password){
              console.log("passwrod", password)
              throw new AuthenticationError('Need password');
            }
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
                return updateUser;
            }
            throw new AuthenticationError('You need to be logged in.');
         },
         editResume: async (parent, { resumeId, resumeData}, context) => {
          if(context.user){
              resumeData['_id'] = resumeId
              const userData = await User.findOne({ _id: context.user._id })

              const resumeList = userData.resumes
              const resumeIndex = resumeList.findIndex(obj => {

                return obj._id == resumeId
              })
              resumeList[resumeIndex] = resumeData
              const updateResumeByID = await User.findOneAndUpdate(


                  { _id : context.user._id},
                  {$set:{resumes: resumeList}},
              );
              //returns the resumeID, if you want to return an oject change the return
              return updateResumeByID;
          }
          throw new AuthenticationError('You need to be logged in.');
         },
         removeResume:  async (parent, {_id}, context)=> {
            // if ther is a contex.user, continue on else throw err
            if(context.user){
                // typeDef is returning a user so i need to return a user
                try{const updateUser = await User.findOneAndUpdate(
                    // find user id 
                     { _id: context.user._id },
                    //  remove bookId form that user
                     { $pull: { resumes: {_id} } },
                     { new: true }
                    );
                    return updateUser;}
                    catch(err){
                      console.log({err})
                    }
            }
            // if user token is not there LOGIN
            throw new AuthenticationError('You need to be logged in!');
          },


        setPaidTrue:  async (parent, {resumeId}, context)=> {
          // if ther is a contex.user, continue on else throw err
          if(context.user){
            try{
              // find one user by id
              const updatedUser = await User.findOne({_id: context.user._id})
                // resumes is = my user's array called resumes
              const resumes = updatedUser.resumes
              console.log("resumes", resumes.length)
              console.log("resumes id", resumeId)

              // handle the case when resume to update is undifind
              const resumeToUpdate = resumes.findIndex((resume) => {
                console.log('***')
                console.log(resume._id)
                return resume._id.toString() === resumeId //639bbd428810235054164636  639bbd428810235054164636
              })
              console.log("resumetoupdate",resumeToUpdate)

              resumes[resumeToUpdate].isPaid = true;
              // console.log("updatedUser",updatedUser)
              updatedUser.resumes = resumes
              await updatedUser.save()




                  return updatedUser;}
                  catch(err){
                    console.log({err})
                    throw err
                  }
          // if user token is not there LOGIN
          }throw new AuthenticationError('You need to be logged in!');
        }


    }}
    // 639bac43d820e7248c66aaa3 id 1
    // 639bac49d820e7248c66aaa8

    //  // typeDef is returning a user so i need to return a user
    // try{
      // const updateUser = await User.findOneAndUpdate(
      //   // find user id
      //    { _id: context.user._id },
      //   //  update the resume by its id
      //   { $set(isPaid: true) { resumes: {resumeId} } },
      //   { new: true }
      //   );

      //   const updateUser = await User.findOneAndUpdate(
      //     { _id: context.user._id, "resumes._id": resumeId },
      //     {
      //         $set: {
      //             isPaid: true
      //         }
      //     },
      //     {new:true}
      // );
      //   // console.log(_id)

      //  {$set:{"resumes":{
      //   isPaid: true

      // }
module.exports = resolvers;