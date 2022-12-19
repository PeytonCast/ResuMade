import React, { useEffect } from "react";
import dayjs from "dayjs";
import { Col, DatePicker, Form, Input, Row } from "antd";

import "./forms.css";

const Education = ({ preload }) => {
  const form = Form.useFormInstance();

  console.log("preload", preload);
  useEffect(() => {
    const formValues = form.getFieldsValue();

    const startDate = preload?.educations[0]?.startDate?.year
      ? preload?.educations[0]?.startDate?.year
      : formValues.startDateYearEducation
      ? formValues.startDateYearEducation
      : null;
    const endDate = preload?.educations[0]?.endDate?.year
      ? preload?.educations[0]?.endDate?.year
      : formValues.endDateYearEducation
      ? formValues.endDateYearEducation
      : null;

    form.setFieldsValue({
      cityEducation: formValues.cityEducation
        ? formValues.cityEducation
        : preload?.educations[0]?.city,
      stateEducation: formValues.stateEducation
        ? formValues.stateEducation
        : preload?.educations[0]?.state,
      certificateDegreeName: formValues.certificateDegreeName
        ? formValues.certificateDegreeName
        : preload?.educations[0]?.degree,
      universityInstitutionName: formValues.universityInstitutionName
        ? formValues.universityInstitutionName
        : preload?.educations[0]?.schoolName,
      startDateYearEducation: startDate ? dayjs().set("year", startDate) : "",
      endDateYearEducation: endDate ? dayjs().set("year", endDate) : "",
      // addAnotherEducation: preload?.educations[0]?.addAnotherEducation
    });
  }, []);

  Form.useWatch(
    [
      "cityEducation",
      "stateEducation",
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

  const rules = [
    {
      required: true,
      message: "This field is required",
    },
  ];

  return (
    <div className="education">
      <Form.Item
        label="Certificate/Degree Name"
        name="certificateDegreeName"
        rules={rules}
      >
        <Input type="text" />
      </Form.Item>

      <Row>
        <Col span={12}>
          <Form.Item
            label="University/Institution Name"
            name="universityInstitutionName"
            rules={rules}
          >
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={9}>
          <Form.Item label="City" name="cityEducation" rules={rules}>
            <Input type="text" />
          </Form.Item>
        </Col>

        <Col span={3}>
          <Form.Item label="State" name="stateEducation" rules={rules}>
            {/* default input to all caps */}
            <Input maxLength={2} type="text" />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={10}>
          <Form.Item
            label="Start Date"
            name="startDateYearEducation"
            rules={rules}
          >
            <DatePicker picker="year" placeholder="YYYY" format={"YYYY"} />
          </Form.Item>
        </Col>

        <Col span={10}>
          <Form.Item label="End Date" name="endDateYearEducation" rules={rules}>
            <DatePicker picker="year" placeholder="YYYY" format={"YYYY"} />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
};
export default Education;
