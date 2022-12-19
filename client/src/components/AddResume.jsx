import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { REMOVE_RESUME } from "../utils/mutations";
import Auth from "../utils/auth";
// import { addResumeId } from "../utils/API";
import { useNavigate, Navigate } from "react-router-dom";
import { Card, ConfigProvider, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "../index.css";

const { Meta } = Card;

const AddResumeCard = () => {
  const nav = useNavigate();
  const fillOutResume = async () => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    // console.log("token", token)
    if (!token) {
      throw new Error("please login");
    }

    try {
      nav("/form");
    } catch (err) {
      console.error(err);
    }

    console.log("adding resume");
  };
  return (
    <div>
      <div>
        <h3 style={{ marginLeft: 15 }}>Add a resume:</h3>
      </div>
      <div>
        <Button type="link" size="size" onClick={() => fillOutResume()}>
          <Card
            hoverable
            icon={<PlusOutlined />}
            onClick={() => fillOutResume()}
            cover={
              <img
                alt="addIcon"
                src={
                  "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe"
                }
              />
            }
            style={{
              width: 300,
              borderColor: "gray",
              borderStyle: "solid",
              padding: 1,
            }}>
            <Meta title=" + New Resume" />
          </Card>
        </Button>
      </div>
    </div>
  );
};

export default AddResumeCard;
