import React from "react";
import { useMutation } from "@apollo/client";
import { useParams } from 'react-router-dom';
import { SET_PAID_TRUE } from "../utils/mutations";
import Auth from '../utils/auth';

const Success = () => {
    const [setPaidTrue] = useMutation(SET_PAID_TRUE);
    const { resumeId } = useParams();
    const savePaidResume =  async () => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) window.location.assign('/login');
        try {
            await setPaidTrue({variables: {id: resumeId}});
            setTimeout(() => {
                window.location.assign('/dashboard');
            }, 1000);
        } catch (err) {
            console.error(err);
        }
    }
    savePaidResume();
    return (
        <div>
            <h1>Success!</h1>
            <h2>Thank you for your purchase!</h2>
            <h2>You will now be redirected to your Dashboard.</h2>
            <h2>Just click on the Download button.</h2>
        </div>
    )
};

export default Success;