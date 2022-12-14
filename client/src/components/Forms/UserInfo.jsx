<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> dd90f5032cb00b4b36d52cbe95b31754273e0d4e
import { Form, Input, Row, Col, Space, InputNumber } from "antd";

const UserInfo = () => {
  const form = Form.useFormInstance();
<<<<<<< HEAD
  const firstName = Form.useWatch("firstName", form);
  const lastName = Form.useWatch("lastName", form);
  const city = Form.useWatch("city", form);
  const state = Form.useWatch("state", form);
  const zip = Form.useWatch("zip", form);
  const phone = Form.useWatch("phone", form);
  // const professionalEmail = Form.useWatch("professionalEmail", form);
  // const socials = Form.useWatch("socials", form);
  const github = Form.useWatch("github", form);
  const linkedin = Form.useWatch("linkedin", form);
=======

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
>>>>>>> dd90f5032cb00b4b36d52cbe95b31754273e0d4e
  // const portfolio = Form.useWatch("portfolio", form);

  return (
    <>
      <Row>
        <Col span={24}>
          <Form.Item title="This field is required." label="First Name" name="firstName" required>
            <Input />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item title="This field is required." label="Last Name" name="lastName" required>
            <Input />
          </Form.Item>
        </Col>

        <Col span={24}>
<<<<<<< HEAD
          <Form.Item title="This field is required." label="City" name="city" required>
=======
          <Form.Item label="City" name="cityPersonal">
>>>>>>> dd90f5032cb00b4b36d52cbe95b31754273e0d4e
            <Input />
          </Form.Item>
        </Col>

        <Col span={24}>
<<<<<<< HEAD
          <Form.Item title="This field is required." label="State" name="state" required>
=======
          <Form.Item label="State" name="statePersonal">
            {/* default input to all caps */}
>>>>>>> dd90f5032cb00b4b36d52cbe95b31754273e0d4e
            <Input maxLength={2} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Zip" name="zip">
            <InputNumber minLength={5} maxLength={9} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item title="This field is required." label="Phone" name="phone" required>
            <InputNumber minLength={10} maxLength={10} />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item label="Professional Email" name="professionalEmail">
            <Input type="email" />
          </Form.Item>
        </Col>

        {/* <Form.Item label="Socials" name="socials"> */}
        {/* <Input.Group> */}
<<<<<<< HEAD
        <Form.Item title="This field is required." label="Github" name="github" required>
=======

        {/* add note to not include https:// or www. for all 3 URLs*/}
        <Form.Item label="Github" name="github">
>>>>>>> dd90f5032cb00b4b36d52cbe95b31754273e0d4e
          <Input addonBefore="https://" placeholder="Github" name="github" />
        </Form.Item>

        <Form.Item title="This field is required." label="Linkedin" name="linkedin" required>
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
