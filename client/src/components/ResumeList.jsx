import React, { useState, useEffect } from "react";
import { FormController } from "../pages";
import googleDoc from "../assets/Google_Docs.max-1100x1100.png";
import document from "../assets/document.png";
import {
  DownloadOutlined,
  EditOutlined,
  CloseCircleOutlined,
  SettingOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Card, Button, Space, Col, Row, ConfigProvider, Popover } from "antd";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME, QUERY_RESUME } from "../utils/queries";
import { SAVE_RESUME, REMOVE_RESUME } from "../utils/mutations";
import Auth from "../utils/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import docSaver from "file-saver";
import createDocument from "../components/Templates/template.js";
import { message } from "antd";
const { Packer } = require("docx");

// import { getResumeId, storeResumeId} from '../utils/API'

const { Meta } = Card;

const ResumeList = () => {
  const [userData, setUserData] = useState({});
  const { data, loading } = useQuery(QUERY_ME);
  const [removeResume] = useMutation(REMOVE_RESUME);
  const nav = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const { loading:loadingResume, error:resumeError, data:resumeData } = useQuery(QUERY_RESUME, {variables: {resumeId: searchParams.get("resumeId")}});

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
      nav(`/form?resumeId=${resumeID}`);
    } catch (err) {
      console.error(err);
    }

    console.log("editing resume");
  };

  const user = data?.me || data?.user || {};

  //Arthur, this return the whole resume object if you give the resumeID that you are looking for
  const getResumeObject = (resumeId) => {
    const resumeList = user?.resumes;
    if (resumeList) {
      const resumeIndex = resumeList.findIndex((obj) => {
        return obj._id == resumeId;
      });
      return resumeList[resumeIndex];
    } else {
      return;
    }
  };

  const handleDownloadResume = async (resumeId) => {
    // get the resumeobject from here
    console.log(resumeId);
    const resume = getResumeObject(resumeId);
    console.log("Resume: ", resume);
    if (resume.isPaid === true) {
      const resumeDoc = createDocument(resume);
      const resumeBlob = await Packer.toBlob(resumeDoc);
      docSaver.saveAs(
        resumeBlob,
        `${resume.personalInfo.firstName} ${resume.personalInfo.lastName}.docx`
      );
      message.success("Succesfully downloading!");
    } else {
      message.warning("Please make a payment before downloading");
    }
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
        <h3 style={{ marginLeft: 15 }}>Your saved resumes:</h3>
      </div>
      <div className="cards" style={{ display: "flex" }}>
        {data?.me.resumes.map((resume, index) => (
          <div key={resume._id}>
            <Col span={6}>
              <Card
                hoverable
                style={{
                  width: 300,
                  height: 440,
                  padding: 1,
                  borderColor: "gray",
                  borderStyle: "solid",
                }}
                actions={[
                  <Popover
                    content={"Edit this resume"}
                    trigger="hover"
                    placement="bottom">
                    <EditOutlined
                      key="edit"
                      onClick={() => handleEditResume(resume._id)}
                    />
                  </Popover>,
                  <Popover
                    content={"DELETE this resume"}
                    trigger="hover"
                    placement="bottom">
                    <CloseCircleOutlined
                      key="delete"
                      onClick={() => handleDeleteResume(resume._id)}
                    />
                  </Popover>,
                  <Popover
                    content={"Download this resume (paid only)"}
                    trigger="hover"
                    placement="bottom">
                    <DownloadOutlined
                      key="download"
                      onClick={() => handleDownloadResume(resume._id)}
                    />
                  </Popover>,
                ]}
                cover={
                  <img
                    alt="example"
                    src="https://images.unsplash.com/photo-1532153432275-818ef462eb1c"
                    height="300"
                  />
                }>
                <Meta title={`${resume.summary}`} style={{ marginBottom: 2 }} />
                {/* <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#141414",
                    },
                  }}>
                  <Space size={[8, 8]} wrap>
                    <Button
                      type="primary"
                      icon={<EditOutlined />}
                      onClick={() => handleEditResume(resume._id)}>
                      Edit
                    </Button>
                    <Button
                      type="primary"
                      danger
                      icon={<CloseCircleOutlined />}
                      onClick={() => handleDeleteResume(resume._id)}>
                      Delete
                    </Button>
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      onClick={() => handleDownloadResume(resume._id)}>
                      Download
                    </Button>
                  </Space>
                </ConfigProvider> */}
              </Card>
            </Col>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeList;
