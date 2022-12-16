import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { REMOVE_RESUME } from "../utils/mutations";
import Auth from "../utils/auth";
// import { addResumeId } from "../utils/API";
import { useNavigate, Navigate } from "react-router-dom";
import addIcon from "../assets/img_487543.png";
import addFile from "../assets/new-document.png";
import { Card, ConfigProvider, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

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
  const handleAddResume = async (resumeID) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    // console.log("token", token)
    if (!token) {
      throw new Error("please login");
    }

    try {
      // console.log('edit resume id:',resumeID)
      // const updateResume = await editResume({variables: {id: resumeID}});
      // console.log('edit updateResume:', updateResume)
      // if (!resumeID) {
      //   throw new Error('there is no resume with that id');
      // }

      // setUserData(updateResume);
      nav("/form");
    } catch (err) {
      console.error(err);
    }

    console.log("adding resume");
  };
  return (
    <div>
      <div>
        <h3>Add a resume:</h3>
      </div>
      <div className="cards">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#141414",
            },
          }}>
          <Card
            hoverable
            style={{
              width: 300,
              height: 410,
              borderColor: "gray",
              borderStyle: "solid",
            }}
            bodyStyle={{ display: "flex", justifyContent: "center" }}
            cover={<img alt="addIcon" src={`${addFile}`} />}>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => handleAddResume()}>
              New Resume
            </Button>
          </Card>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default AddResumeCard;
