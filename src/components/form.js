import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Calendar from "react-input-calendar";

const moment = require("moment");

const CalendarsForm = () => {
  const [value1, onChange1] = useState(new Date());
  const [value2, onChange2] = useState(new Date());

  const today = moment();
  console.log(today);

  const beforeTenDays = moment().subtract(10, "days");
  console.log(beforeTenDays);

  console.log(value1, value2);

  return (
    <Form>
      <Row>
        <Col lg={5} md={5} sm={5}>
          <Calendar
            format="DD/MM/YYYY"
            date={beforeTenDays}
            onChange={onChange1}
            value={value1}
            computableFormat={"DD.MM.YYYY"}
          />
        </Col>
        <Col lg={5} md={5} sm={5}>
          <Calendar
            format="DD/MM/YYYY"
            date={today}
            onChange={onChange2}
            value={value2}
            computableFormat={"DD.MM.YYYY"}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default CalendarsForm;
