import React from "react";
import { useParams } from 'react-router-dom';

const Success = async () => {
    const { resumeId } = useParams();
    function savePaidResume() {
        console.log( resumeId );
        // update isPaid=true to database(resumeId) --> mutation
        setTimeout(() => {
          window.location.assign('/dashboard');
        }, 3000);
    }
    savePaidResume();

    return (
        <div>
            <h1>Success!</h1>
            <h2>Thank you for your purchase!</h2>
            <h2>You will now be redirected to your dashboard.</h2>
            <h2>Just click on the Download button.</h2>
        </div>
    )
};

export default Success;