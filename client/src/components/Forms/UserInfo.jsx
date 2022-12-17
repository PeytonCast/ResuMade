import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, Space, InputNumber } from "antd";

const UserInfo = ({ preload }) => {
  const form = Form.useFormInstance();

  useEffect(() => {
    form.setFieldsValue({
      firstName: preload?.personalInfo?.firstName,
      lastName: preload?.personalInfo?.lastName,
      cityPersonal: preload?.personalInfo?.city,
      statePersonal: preload?.personalInfo?.state,
      zip: preload?.personalInfo?.zip,
      phone: preload?.personalInfo?.phoneNumber,
      professionalEmail: preload?.personalInfo?.email,
      github: preload?.personalInfo?.userGithub,
      linkedin: preload?.personalInfo?.linkedin,
      portfolio: preload?.personalInfo?.portfolio
  })})
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
    <>
      <Row>
        <Col span={24}>
          <Form.Item label="First Name" name="firstName">
            <Input />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Last Name" name="lastName">
            <Input />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="City" name="cityPersonal">
            <Input />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="State" name="statePersonal">
            {/* default input to all caps */}
            <Input maxLength={2} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Zip" name="zip">
            <Input minLength={5} maxLength={9} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Phone" name="phone">
            <Input minLength={10} maxLength={10} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Professional Email" name="professionalEmail">
            <Input type="email" />
          </Form.Item>
        </Col>

        {/* <Form.Item label="Socials" name="socials"> */}
        {/* <Input.Group> */}

        {/* add note to not include https:// or www. for all 3 URLs*/}
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
      </Row>
    </>
  );
};
export default UserInfo;
