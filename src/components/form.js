import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Calendar from "react-input-calendar";

const moment = require("moment");

const CalendarsForm = () => {
  const [value, onChange] = useState(new Date());
  /* var date = new Date();
  var today =
    date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
  console.log(today); */

  const today = moment();
  console.log(today);

  const beforeTenDays = moment().subtract(10, "days");
  console.log(beforeTenDays);

  let x = moment(today - 10).format("YYYY-MM-DD");
  console.log(x);

  return (
    <Form>
      <Row>
        <Col lg={5} md={5} sm={5}>
          <Calendar
            format="DD/MM/YYYY"
            date={beforeTenDays}
            onChange={onChange}
            value={value}
            computableFormat={"DD.MM.YYYY"}
          />
        </Col>
        <Col lg={5} md={5} sm={5}>
          <Calendar
            format="DD/MM/YYYY"
            date={today}
            onChange={onChange}
            value={value}
            computableFormat={"DD.MM.YYYY"}
          />
        </Col>
      </Row>
    </Form>
  );
};

export default CalendarsForm;
