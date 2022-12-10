import React from "react";
import Auth from '../utils/auth';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

const Profile = () => {
   
  
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
}

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const {data, loading} = useQuery(GET_ME);
  const [addResume] = useMutation(SAVE_RESUME)
  const { username: userParam } = useParams();



    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Navigate to="/dashboard" />;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!user?.username) {
      return (
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
      );
    }
};
export default Dashboard;
