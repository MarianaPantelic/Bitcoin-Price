import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "./css/calendar.css";

import Header from "./components/header";
import CalendarsForm from "./components/form";
import LineChart from "./components/chart";

import getResults from "../src/api/index";

const moment = require("moment");

const App = () => {
  const today = moment().format("YYYY-DD-MM");

  const beforeTenDays = moment().subtract(10, "days").format("YYYY-DD-MM");

  const [inputValues, setInputValues] = useState({
    value1: today,
    value2: beforeTenDays,
  });
  const [results, setResults] = useState({});

  const saveInputValues = (value1, value2) => {
    setInputValues({ value1: value1, value2: value2 });
  };

  useEffect(() => {
    getResults(inputValues.value1, inputValues.value2).then((data) =>
      setResults(data.bpi)
    );
  }, [inputValues]);

  return (
    <Container>
      <Header />
      <CalendarsForm saveInputValues={saveInputValues} />
      <LineChart results={results} />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
