import React from "react";
// import AddResume from '../components/AddResume';
// import Auth from '../utils/auth';

import ResumeList from "../components/ResumeList";

//user can add, delete, edit resume
const Dashboard = () => {
  // const {data, loading} = useQuery(QUERY_ME);

  // const user = data?.me || data?.user || {};
 
  // console.log(user)



    return (
      <div>
        <h2>Welcome to Your Profile!</h2>
        {/* <h2>Welcome {`${user.username}'s`}!</h2> */}
        {/* <AddResume /> */}
        <ResumeList 
          // resumes={user.resume}
        />
      </div>
    );
};
export default Dashboard;
