import React, { useState, useEffect } from "react";
import { FormController } from "../pages";
import googleDoc from "../assets/Google_Docs.max-1100x1100.png";
import document from "../assets/document.png";
import {
  DownloadOutlined,
  EditOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import { Card, Button, Space, Col, Row, ConfigProvider } from "antd";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { SAVE_RESUME, REMOVE_RESUME } from "../utils/mutations";
import Auth from "../utils/auth";

const ResumeList = () => {
  const [userData, setUserData] = useState({});
  const { data, loading } = useQuery(QUERY_ME);
  const [removeResume] = useMutation(REMOVE_RESUME);
  const [editResume] = useMutation(SAVE_RESUME);

  // checks if the user is logged in and gets user's data
  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;
        // console.log("token", token)
        if (!token) {
          return false;
        }

        const user = await data?.me;

        console.log("user", user);
        console.log("data", data);
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [data]);

  const handleEditResume = async (resumeID) => {
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
      // window.location.reload();
    } catch (err) {
      console.error(err);
    }

    console.log("editing resume");
  };

  const handleDownloadResume = async (resumeID) => {
    console.log("downloading resume");
  };

  const handleDeleteResume = async (resumeID) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    // console.log("token", token)
    if (!token) {
      throw new Error("please login");
    }

    try {
      console.log("resume id:", resumeID);
      const updatedUser = await removeResume({ variables: { id: resumeID } });
      console.log("updatedUser:", updatedUser);
      if (!resumeID) {
        throw new Error("there is no resume with that id");
      }

      setUserData(updatedUser);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <h3>Your saved resumes:</h3>
      </div>
      <div className="cards" style={{ display: "flex" }}>
        {data?.me.resumes.map((resume, index) => (
          <div key={resume._id}>
            <Col span={6}>
              <Card
                hoverable
                style={{
                  width: 300,
                  height: 410,
                  padding: 9,
                  borderColor: "gray",
                  borderStyle: "solid",
                }}
                cover={<img alt="example" src={`${document}`} />}>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#141414",
                    },
                  }}>
                  <Space size={[8, 16]} wrap>
                    <Button
                      type="primary"
                      icon={<EditOutlined />}
                      onClick={() => handleEditResume(resume._id)}>
                      Edit
                    </Button>

                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      onClick={() => handleDownloadResume(resume._id)}>
                      Download
                    </Button>

                    <Button
                      type="primary"
                      danger
                      icon={<CloseCircleOutlined />}
                      onClick={() => handleDeleteResume(resume._id)}>
                      Delete
                    </Button>
                  </Space>
                </ConfigProvider>
              </Card>
            </Col>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeList;
