import React from "react";
import { useQuery, useMutation } from '@apollo/client';
import { REMOVE_RESUME } from '../utils/mutations';
import Auth from '../utils/auth';
// import { addResumeId } from "../utils/API";
import { useNavigate, Navigate } from "react-router-dom";
import addIcon from '../assets/img_487543.png';
import { Card } from 'antd';
import { Button } from 'antd';

const AddResumeCard = () => {
  // const [addThought, { error }] = useMutation(ADD_THOUGHT, {
  //   update(cache, { data: { addThought } }) {
  //     try {
  //       const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

  //       cache.writeQuery({
  //         query: QUERY_THOUGHTS,
  //         data: { thoughts: [addThought, ...thoughts] },
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   },
  // });

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await addThought({
  //       variables: {
  //         thoughtText,
  //         thoughtAuthor: Auth.getProfile().data.username,
  //       },
  //     });

  //     setThoughtText('');
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

 const nav = useNavigate();
  const fillOutResume = async () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
  // console.log("token", token)
    if (!token) {
      throw new Error('please login');
    }
  
    try {
     
  
      nav("/form");
    } catch (err) {
      console.error(err);
  
    }
  
    console.log("adding resume")
   };
  return (
    <div>
      <div className="cards">
          <Card hoverable
          style={{ width: 240, paddingLeft: 38, paddingRight: 38, paddingTop: 12, paddingBottom: 6 }}
          cover={<img alt="addIcon" src={`${addIcon}`} />}>
              <Button type="primary" onClick={() => fillOutResume()} >New Resume</Button>
          </Card>
        </div>
    </div>
  );
}

export default AddResumeCard;
