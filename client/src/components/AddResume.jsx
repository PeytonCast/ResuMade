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

const { Meta } = Card;

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
      <div className="cards">
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#141414",
            },
          }}>
          {/* <Card
            hoverable
            onClick={() => fillOutResume()}
            style={{
              width: 300,
              height: 410,
              borderColor: "gray",
              borderStyle: "solid",
            }} */}
          {/* bodyStyle={{ display: "flex", justifyContent: "center" }}
          cover={<img alt="addIcon" src={`${addFile}`} />} */}
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
                height: 440,
                borderColor: "gray",
                borderStyle: "solid",
                padding: 1,
              }}>
              <Meta title=" + New Resume" />
            </Card>
          </Button>
          {/* </Card> */}
        </ConfigProvider>
      </div>
    </div>
  );
};

export default AddResumeCard;
