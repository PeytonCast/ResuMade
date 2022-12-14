import React, { useEffect } from "react";
import {
  // Checkbox,
  Form,
  Input,
  InputNumber,
  Row,
  Col,
  DatePicker,
  Checkbox,
} from "antd";

const Education = () => {
  const form = Form.useFormInstance();

  useEffect(() => {
    // watching fields for user input and logging data to the console
    // console.log(form.getFieldsValue(true));

    // retrieving start and end dates from user input
    // console.log(form.getFieldValue("startDateMonth"));
    // console.log(form.getFieldValue("startDateYear"));
    // console.log(form.getFieldValue("endDateMonth"));
    // console.log(form.getFieldValue("endDateMonth"));

    // not DRY whatsoever - but it works
    // if (form.getFieldsValue("startDateMonthEducation")["startDateMonthEducation"]) {
    //   // console logs the user input's start date month
    //   console.log(
    //     form.getFieldsValue("startDateMonthEducation")["startDateMonthEducation"].format("MMMM")
    //   );
    // }

    // if (
    //   form.getFieldsValue("startDateYearEducation")["startDateYearEducation"]
    // ) {
    //   // console logs the user input's start date year
    //   console.log(
    //     form
    //       .getFieldsValue("startDateYearEducation")
    //       ["startDateYearEducation"].format("YYYY")
    //   );
    // }

    // if (form.getFieldsValue("endDateMonth")["endDateMonthEducation"]) {
    //   // console logs the user input's end date month
    //   console.log(
    //     form
    //       .getFieldsValue("endDateMonthEducation")
    //       ["endDateMonthEducation"].format("MMMM")
    //   );
    // }

    // if (form.getFieldsValue("endDateYearEducation")["endDateYearEducation"]) {
    //   // console logs the user input's end date year
    //   console.log(
    //     form
    //       .getFieldsValue("endDateYearEducation")
    //       ["endDateYearEducation"].format("YYYY")
    //   );
    // }
  });

  Form.useWatch(
    [
      "cityEducation",
      "stateEducation",
      // "grade",
      "certificateDegreeName",
      "universityInstitutionName",
      "startDateMonthEducation",
      "startDateYearEducation",
      "endDateMonthEducation",
      "endDateYearEducation",
      "addAnotherEducation",
    ],
    form
  );
  // Form.useWatch(
  //   "universityInstitutionName",
  //   form
  // );
  // Form.useWatch("city", form);
  // Form.useWatch("state", form);

  // // const startDate = Form.useWatch("startDate", form);
  // Form.useWatch("startDateMonthEducation", form);
  // Form.useWatch("startDateYearEducation", form);

  // // const endDate = Form.useWatch("endDate", form);
  // Form.useWatch("endDateMonthEducation", form);
  // Form.useWatch("endDateYearEducation", form);

  // Form.useWatch("grade", form);

  // // checkbox
  // Form.useWatch("addAnotherEducation", form);

  // const onDateChosen = (e) => {
  //   console.log(e.$d);
  // };

  return (
    <>
      <Form.Item label="Certificate/Degree Name" name="certificateDegreeName">
        <Input />
      </Form.Item>

      <Row>
        <Col span={12}>
          <Form.Item
            label="University/Institution Name"
            name="universityInstitutionName"
          >
            <Input />
          </Form.Item>
        </Col>

        <Col span={9}>
          <Form.Item label="City" name="cityEducation">
            <Input />
          </Form.Item>
        </Col>

        <Col span={3}>
          <Form.Item label="State" name="stateEducation">
            {/* default input to all caps */}
            <Input maxLength={2} />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={10}>
          <Form.Item label="Start Date: Month" name="startDateMonthEducation">
            <DatePicker picker="month" format={"MMMM"} />
          </Form.Item>

          <Form.Item label="Start Date: Year" name="startDateYearEducation">
            <DatePicker picker="year" format={"YYYY"} />
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item label="End Date: Month" name="endDateMonthEducation">
            <DatePicker picker="month" format={"MMMM"} />
          </Form.Item>

          <Form.Item label="End Date: Year" name="endDateYearEducation">
            <DatePicker picker="year" format={"YYYY"} />
          </Form.Item>
        </Col>

        {/* <Col span={12}>
          <Form.Item label="Grade (if applicable)" name="grade">
            <InputNumber maxLength={2} />
          </Form.Item>
        </Col> */}

        {/* <Form.Item
          label="Add Another"
          name="addAnotherEducation"
          valuePropName="checked"
        > */}
          {/* upon check, add a duplicate education section to add additional degree */}
          {/* <Checkbox></Checkbox> */}
        {/* </Form.Item> */}
      </Row>
    </>
  );
};
export default Education;
