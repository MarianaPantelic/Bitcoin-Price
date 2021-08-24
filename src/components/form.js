import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Calendar from "react-input-calendar";

const moment = require("moment");

const CalendarsForm = (props) => {
  const [value1, onChange1] = useState(props.beforeTenDays);
  const [value2, onChange2] = useState(props.today);

  const renderData = (value1, value2) => {
    props.saveInputValues(value1, value2);
  };

  return (
    <Form>
      <Row>
        <Col lg={4} md={4} sm={4}>
          <Calendar
            format="YYYY-MM-DD"
            date={props.beforeTenDays}
            onChange={onChange1}
            value={value1}
            computableFormat={"YYYY-MM-DD"}
          />
        </Col>
        <Col lg={4} md={4} sm={4}>
          <Calendar
            format="YYYY-MM-DD"
            date={props.today}
            onChange={onChange2}
            value={value2}
            computableFormat={"YYYY-MM-DD"}
          />
        </Col>
        <Col lg={3} md={3} sm={3}>
          <Button onClick={() => renderData(value1, value2)}>Render</Button>
        </Col>
      </Row>
      <Row>
        <Col lg={4} md={4} sm={4} className="text-center">
          {moment(value1).format("YYYY-MM-DD")}
        </Col>
        <Col lg={4} md={4} sm={4} className="text-center">
          {moment(value2).format("YYYY-MM-DD")}
        </Col>
      </Row>
    </Form>
  );
};

export default CalendarsForm;
