import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, Space, InputNumber } from "antd";
import "./forms.css";

const UserInfo = () => {
  const form = Form.useFormInstance();

  // useEffect(() => {
  //   console.log(form.getFieldsValue(true));
  // });

  Form.useWatch(
    [
      "firstName",
      "lastName",
      "cityPersonal",
      "statePersonal",
      "zip",
      "phone",
      "professionalEmail",
      "github",
      "linkedin",
      "portfolio",
    ],
    form
  );
  // const lastName = Form.useWatch("lastName", form);
  // const city = Form.useWatch("city", form);
  // const state = Form.useWatch("state", form);
  // const zip = Form.useWatch("zip", form);
  // const phone = Form.useWatch("phone", form);
  // const professionalEmail = Form.useWatch("professionalEmail", form);
  // const socials = Form.useWatch("socials", form);
  // const github = Form.useWatch("github", form);
  // const linkedin = Form.useWatch("linkedin", form);
  // const portfolio = Form.useWatch("portfolio", form);

  return (
    <div className="form-container">
      <Row gutter={16}>
        <Col span={18}>
          <Form.Item label="First Name" name="firstName">
            <Input />
          </Form.Item>
        </Col>

        <Col span={18}>
          <Form.Item label="Last Name" name="lastName">
            <Input />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="City" name="cityPersonal">
            <Input />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="State" name="statePersonal">
            {/* default input to all caps */}
            <Input maxLength={2} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Zip" name="zip">
            <InputNumber minLength={5} maxLength={9} />
          </Form.Item>
        </Col>

        <Col span={18}>
          <Form.Item label="Phone" name="phone">
            <InputNumber minLength={10} maxLength={10} />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Form.Item label="Professional Email" name="professionalEmail">
            <Input type="email" />
          </Form.Item>
        </Col>
      </Row>
      {/* <Form.Item label="Socials" name="socials"> */}
      {/* <Input.Group> */}
      <Row>
        {/* add note to not include https:// or www. for all 3 URLs*/}
        <Col span={12}>
          <Form.Item label="Github" name="github">
            <Input addonBefore="https://" placeholder="Github" name="github" />
          </Form.Item>

          <Form.Item label="Linkedin" name="linkedin">
            <Input
              addonBefore="https://"
              placeholder="LinkedIn"
              name="linkedin"
            />
          </Form.Item>

          <Form.Item label="Portfolio" name="portfolio">
            <Input
              addonBefore="https://"
              placeholder="Portfolio"
              name="portfolio"
            />
            {/* </Input.Group> */}
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};
export default UserInfo;
