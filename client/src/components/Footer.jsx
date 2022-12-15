import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import "./footer.css";

const FooterBar = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <Row justify="space-around">
          {/* Column1 */}
          <Col span={4}>
            <h4>Disclaimer:</h4>
            <p>
              ResuMade is not responsible for any rejected job offers. However,
              we can guarantee that our resume templates will give you the{" "}
              <span style={{ fontWeight: "bold" }}>best</span> asset to start
              your career journey.
            </p>
          </Col>
          {/* Column2 */}
          <Col span={4}>
            <h4>Stuff</h4>
            <ui>
              <li></li>
              <li></li>
              <li></li>
            </ui>
          </Col>
          {/* Column3 */}
          <Col span={4}>
            <h4>Contact Us</h4>
            <ui>
              <li>LinkedIn </li>
              <li>GitHub </li>
              <li>Slack</li>
            </ui>
          </Col>
        </Row>
        <hr />
        <div>
          <p style={{ textAlign: "center" }}>
            &copy;2022 ResuMade | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
