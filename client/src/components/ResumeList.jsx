import React, { useState, useEffect} from "react";
import { Card } from 'antd';
import { FormController } from "../pages"
import googleDoc from '../assets/Google_Docs.max-1100x1100.png'
import addIcon from '../assets/img_487543.png'
import { Button } from 'antd';
import { useQuery, useMutation } from '@apollo/client';
import {  QUERY_ME } from '../utils/queries';
import { REMOVE_RESUME } from '../utils/mutations';
import Auth from '../utils/auth';
import { deleteResumeId } from "../utils/API";


const ResumeList = () => {
  const [userData, setUserData] = useState({});
  const {data, loading} = useQuery(QUERY_ME);
  const [removeResume] = useMutation(REMOVE_RESUME)

  // checks if the user is logged in and gets user's data
  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
// console.log("token", token)
        if (!token) {
          return false;
        }

        const user = await data?.me 
     
        console.log("user", user)
        console.log("data", data)
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [data]);
  
 const handleEditResume = async (resumeID) => {


  console.log("editing resume")
 };
 const handleDownloadResume = async (resumeID) => {


  console.log("downloading resume")
 };


 const handleDeleteResume = async (resumeID) => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
console.log("token", token)
  if (!token) {
    throw new Error('please login');
  }

  try {
    console.log('resume id:',resumeID)
    const updatedUser = await removeResume({variables: {id: resumeID}});
    console.log('updatedUser:',updatedUser)
    if (!resumeID) {
      throw new Error('there is no resume with that id');
    }

console.log("hi")
    setUserData(updatedUser);
    
    deleteResumeId(resumeID);
    window.location.reload();
  } catch (err) {
    console.error(err);
  }
  console.log("deleting resume")
 };

  return (
    <div>
      hi from resume list
      <div className="cards">
        <Card hoverable
         style={{ width: 240, paddingLeft: 38, paddingRight: 38, paddingTop: 12, paddingBottom: 6 }}
         cover={<img alt="addIcon" src={`${addIcon}`} />}>
        <Button type="primary" href="/form" >New Resume</Button>
        </Card>
      </div>

             <div className="cards" >
        {data?.me.resumes.map((resume, index) => (
            
              <div key={resume._id}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={`${googleDoc}`} />}
                
              >
                
                <Button type="primary" onClick={() => handleEditResume(resume._id)}>Edit</Button>
                <Button type="primary" danger onClick={() => handleDeleteResume(resume._id)}>Delete</Button>
                <Button type="primary" onClick={() => handleDownloadResume(resume._id)}>Download</Button>
              </Card>
              </div>
        ))}
      </div>

    </div>
  );
}

export default ResumeList;
