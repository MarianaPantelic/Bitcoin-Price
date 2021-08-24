import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "./css/calendar.css";

import Header from "./components/header";
import CalendarsForm from "./components/form";
import LineChart from "./components/chart";

const moment = require("moment");

const App = () => {
  const today = moment().format("YYYY-MM-DD");

  const beforeTenDays = moment().subtract(10, "days").format("YYYY-MM-DD");

  const [inputValues, setInputValues] = useState({
    value1: beforeTenDays,
    value2: today,
  });

  const saveInputValues = (value1, value2) => {
    setInputValues({ value1: value1, value2: value2 });
  };

  return (
    <Container>
      <Header />
      <CalendarsForm
        today={today}
        beforeTenDays={beforeTenDays}
        saveInputValues={saveInputValues}
      />
      <LineChart inputValues={inputValues} />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
