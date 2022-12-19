import React from "react";
import { Col, Row } from "antd";
import "./footer.css";

const FooterBar = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <Row justify="space-around">
          <Col span={18}>
            <h4>Disclaimer:</h4>
            <p>
              Our template is specifically made for those seeking employment or
              advancement in the coding/web development industry. Certain
              questions within this form would not be applicable to other
              industries. This website focuses on the resume formatting and
              content only and does not guarantee job placement or interview
              scheduling with any company. We hope this helps you!
            </p>
          </Col>
        </Row>
        <hr />
        <div>
          <p style={{ textAlign: "center" }}>
            ResuMade &copy; 2022. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
