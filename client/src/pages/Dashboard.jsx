import React from "react";
import CardResume from '../components/CardResume';
// import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
// import { useParams } from 'react-router-dom';
import { QUERY_ME} from '../utils/queries';

//user can add, delete, edit resume
const Dashboard = () => {
  // const {data, loading} = useQuery(QUERY_ME);
  // // const [addResume] = useMutation(ADD_RESUME)

  // const user = data?.me || data?.user || {};
 
  // console.log(data)

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
         <CardResume />
      </div>
    );
};
export default Dashboard;
