import React from "react";
// import { Card } from 'antd';
// import googleDoc from '../assets/Google_Docs.max-1100x1100.png'
import { Button, Space } from 'antd';


const CardResume = () => {
  // const { Meta } = Card;
  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  // const user = data?.me || data?.user || {};
  // // const allResumes 
  // useEffect(() => {
  //   const getUserData = async () => {
  //     try {
  //       const token = Auth.loggedIn() ? Auth.getToken() : null;
        
  //       if (!token) {
  //         return false;
  //       }

  //       const user = await data.me
  //       setUserData(user);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  // }, [data])
  // console.log(user)

  return (
    <Space wrap>

      <Button>Add Resume</Button>
      {/* <div className="cards">
        {allResumes.map(resume => {

        })}
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={`${googleDoc}`} />}
          >
            <Button type="primary" >edit</Button>
            <Button type="primary" danger>Delete</Button>
        </Card>
      </div> */}
    </Space>
  );
}

export default CardResume;

