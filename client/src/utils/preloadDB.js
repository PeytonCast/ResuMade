import React, { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { useNavigate, Navigate } from "react-router-dom";

import Education from '../components/Forms/Education';
import Experience from '../components/Forms/Experience';
import Projects from '../components/Forms/Projects';
import Summary from '../components/Forms/Summary';
import TechnicalSkills from '../components/Forms/TechnicalSkills';
import UserInfo from '../components/Forms/UserInfo';



import { useQuery } from '@apollo/client';
import { QUERY_RESUME } from "./queries";
  
//Preload the form with user's data
export const PreloadDB = () => {
    const [userData, setUserData] = useState({});
    const nav = useNavigate(); 
    

    const [searchParams, setSearchParams] = useSearchParams();
    
    const { loading:loadingResume, error:resumeError, data:resumeData } = useQuery(QUERY_RESUME, {variables: {resumeId: searchParams.get("resumeId")}});

    console.log("getResume2", resumeData?.resume)

    
//  add or edit? if edit then preload
    // if (resumeData === null) {
    //   nav('/form');
    // } 
    
 
  return (
    <div>
        <Education preloadedValues={userData}/>
        <Experience preloadedValues={userData}/>
        <Projects preloadedValues={userData}/>
        <Summary preloadedValues={userData}/>
        <TechnicalSkills preloadedValues={userData}/>
        <UserInfo preloadedValues={userData}/>

    </div>
  )
}

