import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Calendar from "react-input-calendar";

const moment = require("moment");

const CalendarsForm = (props) => {
  const [value1, onChange1] = useState(new Date());
  const [value2, onChange2] = useState(new Date());

  const today = moment();
  console.log(today);

  const beforeTenDays = moment().subtract(10, "days");
  console.log(beforeTenDays);

  console.log(value1, value2);

  const renderData = () => {
    let formattedValue1 = moment(value1).format("YYYY-DD-MM");
    let formattedValue2 = moment(value2).format("YYYY-DD-MM");
    props.saveInputValues(formattedValue1, formattedValue2);
  };

  return (
    <Form>
      <Row>
        <Col lg={4} md={4} sm={4}>
          <Calendar
            format="DD/MM/YYYY"
            date={beforeTenDays}
            onChange={onChange1}
            value={value1}
            computableFormat={"DD.MM.YYYY"}
          />
        </Col>
        <Col lg={4} md={4} sm={4}>
          <Calendar
            format="DD/MM/YYYY"
            date={today}
            onChange={onChange2}
            value={value2}
            computableFormat={"DD.MM.YYYY"}
          />
        </Col>
        <Col lg={3} md={3} sm={3}>
          <Button onClick={renderData}>Render</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CalendarsForm;
