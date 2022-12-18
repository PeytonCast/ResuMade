import React, { useEffect } from "react";
import { Form, Input } from "antd";
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

  const rules = [
    {
      required: true,
      message: "This field is required",
    },
  ];

  return (
    <div className="personal-container">
      <Form.Item
        {...formItemLayout}
        label="First Name"
        name="firstName"
        rules={rules}
      >
        <Input style={{ width: 400 }} type="text" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Last Name"
        name="lastName"
        rules={rules}
      >
        <Input style={{ width: 400 }} type="text" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="City"
        name="cityPersonal"
        rules={rules}
      >
        <Input style={{ width: 200 }} type="text" />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="State"
        name="statePersonal"
        rules={rules}
      >
        {/* default input to all caps */}
        <Input maxLength={2} style={{ width: 60 }} type="text" />
      </Form.Item>

      <Form.Item {...formItemLayout} label="Zip" name="zip" rules={rules}>
        <Input minLength={5} maxLength={5} />
      </Form.Item>

      <Form.Item {...formItemLayout} label="Phone" name="phone" rules={rules}>
        <Input minLength={10} maxLength={10} style={{ width: 200 }} />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Professional Email"
        name="professionalEmail"
        rules={rules}
      >
        <Input type="email" style={{ width: 400 }} />
      </Form.Item>

      <Form.Item {...formItemLayout} label="Github" name="github" rules={rules}>
        <Input
          addonBefore="https://"
          placeholder="Github"
          name="github"
          type="text"
          style={{ width: 400 }}
        />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Linkedin"
        name="linkedin"
        rules={rules}
      >
        <Input
          addonBefore="https://"
          placeholder="LinkedIn"
          name="linkedin"
          type="text"
          style={{ width: 400 }}
        />
      </Form.Item>

      <Form.Item
        {...formItemLayout}
        label="Portfolio"
        name="portfolio"
        rules={rules}
      >
        <Input
          addonBefore="https://"
          placeholder="Portfolio"
          name="portfolio"
          type="text"
          style={{ width: 400 }}
        />
      </Form.Item>
    </div>
  );
};
export default UserInfo;
