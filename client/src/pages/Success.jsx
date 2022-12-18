import React from "react";
import { useMutation } from "@apollo/client";
import { useParams  } from "react-router-dom";
import { SET_PAID_TRUE } from "../utils/mutations";
import Auth from '../utils/auth';
import { message } from "antd";

const Success = () => {
  const [setPaidTrue] = useMutation(SET_PAID_TRUE);
  const { resumeId } = useParams();
  const savePaidResume =  async () => {
      const token = Auth.loggedIn() ? Auth.getToken() : null;
      if (!token) window.location.assign('/login');
      try {
          await setPaidTrue({variables: {resumeId: resumeId }});
          message.success("Payment succesful. Thank you!");
          setTimeout(() => {
              message.success("Payment succesful. Thank you!");
              window.location.assign('/dashboard');
          }, 500);
      } catch (err) {
          console.error(err);
      }
  }
  savePaidResume();

  return (
    <div>
      <h1>Success!</h1>
      <h2>Thank you for your purchase!</h2>
      <h2>Your resume docx file is in your download folder.</h2>
      <h2>You will now be redirected to your dashboard.</h2>
    </div>
  );
};

export default Success;
