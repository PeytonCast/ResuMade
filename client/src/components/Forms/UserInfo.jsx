import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, Space, InputNumber } from "antd";
import "./forms.css";

const formItemLayout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 14,
  },
};

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
      portfolio: preload?.personalInfo?.portfolio,
    });
  });
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
    <div className="personal-container">
      <Form.Item {...formItemLayout} label="First Name" name="firstName">
        <Input style={{ width: 400 }} type="text"/>
      </Form.Item>

      <Form.Item {...formItemLayout} label="Last Name" name="lastName">
        <Input style={{ width: 400 }} type="text"/>
      </Form.Item>

      <Form.Item {...formItemLayout} label="City" name="cityPersonal">
        <Input style={{ width: 200 }} type="text"/>
      </Form.Item>

      <Form.Item {...formItemLayout} label="State" name="statePersonal">
        {/* default input to all caps */}
        <Input maxLength={2} style={{ width: 60 }} type="text"/>
      </Form.Item>

      <Form.Item {...formItemLayout} label="Zip" name="zip">
        <Input minLength={5} maxLength={5} />
      </Form.Item>

      <Form.Item {...formItemLayout} label="Phone" name="phone">
        <Input minLength={10} maxLength={10} style={{ width: 200 }} />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Professional Email"
        name="professionalEmail">
        <Input type="email" style={{ width: 400 }} />
      </Form.Item>

      {/* <Form.Item label="Socials" name="socials"> */}
      {/* <Input.Group> */}

      {/* add note to not include https:// or www. for all 3 URLs*/}

      <Form.Item {...formItemLayout} label="Github" name="github">
        <Input
          addonBefore="https://"
          placeholder="Github"
          name="github"
          type="text"
          style={{ width: 400 }}
        />
      </Form.Item>

      <Form.Item {...formItemLayout} label="Linkedin" name="linkedin">
        <Input
          addonBefore="https://"
          placeholder="LinkedIn"
          name="linkedin"
          type="text"
          style={{ width: 400 }}
        />
      </Form.Item>

      <Form.Item {...formItemLayout} label="Portfolio" name="portfolio">
        <Input
          addonBefore="https://"
          placeholder="Portfolio"
          name="portfolio"
          type="text"
          style={{ width: 400 }}
        />
        {/* </Input.Group> */}
      </Form.Item>
    </div>
  );
};
export default UserInfo;
