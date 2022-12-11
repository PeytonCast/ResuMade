import React from "react";
// import AddResume from '../components/AddResume';
// import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME} from '../utils/queries';
import ResumeList from "../components/ResumeList";

//user can add, delete, edit resume
const Dashboard = () => {
  // const {data, loading} = useQuery(QUERY_ME);

  // const user = data?.me || data?.user || {};
 
  // console.log(user)

  //COMMENT BACK IN WHEN AUTH LOGIN IS SETUP
    // if (loading) {
    //   return <div>Loading...</div>;
    // }
  
    // if (!user?.username) {
    //   return (
    //     <h4>
    //       You need to be logged in to see this. Use the navigation links above to
    //       sign up or log in!
    //     </h4>
    //   );
    // }

    // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    //   return <Navigate to="/dashboard" />;
    // }
  

    return (
      <div>
        <h2>Welcome to Your Profile!</h2>
        {/* <AddResume /> */}
        <ResumeList 
          // resumes={user.resume}
        />
      </div>
    );
};
export default Dashboard;
