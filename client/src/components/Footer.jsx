import React from "react";
import { Col, Row } from "antd";
import "./footer.css";

const FooterBar = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <Row justify="space-around">
          {/* Column1 */}
          <Col span={18}>
            <h4>Disclaimer:</h4>
            <p>
              ResuMade is not responsible for any rejected job offers. However,
              we can guarantee that our resume templates will give you the{" "}
              <span style={{ fontWeight: "bold" }}>best</span> asset to start
              your career journey.
            </p>
          </Col>
          {/* Column2 */}
          {/* <Col span={8}>
            <h4>Contact Us</h4>
            <ui style={{ listStyle: "none" }}>
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/PeytonCast/ResuMade">GitHub</a>{" "}
              </li>
            </ui>
          </Col> */}
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
