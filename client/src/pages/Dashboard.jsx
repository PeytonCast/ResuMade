import React from "react";
// import AddResume from '../components/AddResume';
// import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import {  QUERY_ME } from '../utils/queries';

import ResumeList from "../components/ResumeList";

//user can add, delete, edit resume
const Dashboard = () => {
  const {data, loading} = useQuery(QUERY_ME);
  const user = data?.me || data?.user || {};
 
  console.log("user from dashboard", user)

    return (
      <div>
        <h2>Welcome {`${user.username} to your Profile`}!</h2>
        {/* <AddResume /> */}
        <ResumeList />
      </div>
    );
};
export default Dashboard;
