import React, { useState, useEffect } from "react";
// importing the react component library components from ant design
import { Checkbox, Form, Input, Button } from "antd";

export default function QuestionsForm() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

  // establish a form control instance (auto created when not provided)
  const [form] = Form.useForm();

  // state variable for checkbox
  const [checkmark, setCheckmark] = useState(false);

  // function for checkbox change
  const onChange = (e) => {
    console.log(`skip = ${e.target.checked}`);
  };

  useEffect(() => {
    form.validateFields();
  }, [checkmark, form]);

  const onSubmit = (e) => {
    console.log(e, "onSubmit function works");
  };

  return (
    <section>
      <h1>Hello again</h1>
      <Form form={form}>
        <Form.Item>
          <Checkbox onChange={onChange}>Skip</Checkbox>
        </Form.Item>

        <Form.Item
          name="firstName"
          label="First Name"
          // rules={[{ required: true, message: "First name is required" }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>

        <Form.Item>
          <Button type="default" onSubmit={onSubmit}>
            Download!
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}
