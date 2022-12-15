import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, Space, InputNumber } from "antd";

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

  // not valid on form.items
  // const validateMessages = {
  //   required: '${label} is required',
  //   types: {
  //     email: '${label} is not a valid email!',
  //     number: '${label} is not a valid number!',
  //   },
  //   number: {
  //     range: '${label} must be between ${min} and ${max}',
  //   },
  // };

  const rules = [
    {
      required: true,
      message: "This field is required",
    },
  ];

  return (
    <>
      <Row>
        <Col span={24}>
          <Form.Item label="First Name" name="firstName" rules={rules}>
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Last Name" name="lastName" rules={rules}>
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="City" name="cityPersonal" rules={rules}>
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="State" name="statePersonal" rules={rules}>
            {/* default input to all caps */}
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Zip" name="zip" rules={rules}>
            <InputNumber minLength={5} maxLength={5} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Phone" name="phone" rules={rules}>
            <InputNumber minLength={10} maxLength={10} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item
            label="Professional Email"
            name="professionalEmail"
            rules={rules}
          >
            <Input type="email" />
          </Form.Item>
        </Col>

        {/* <Form.Item label="Socials" name="socials"> */}
        {/* <Input.Group> */}

        <Form.Item label="Github" name="github" rules={rules}>
          <Input
            addonBefore="https://"
            placeholder="Github"
            name="github"
            type="text"
          />
        </Form.Item>

        <Form.Item label="Linkedin" name="linkedin" rules={rules}>
          <Input
            addonBefore="https://"
            placeholder="LinkedIn"
            name="linkedin"
            type="text"
          />
        </Form.Item>

        <Form.Item label="Portfolio" name="portfolio" rules={rules}>
          <Input
            addonBefore="https://"
            placeholder="Portfolio"
            name="portfolio"
            type="text"
          />
          {/* </Input.Group> */}
        </Form.Item>
      </Row>
    </>
  );
};
export default UserInfo;
