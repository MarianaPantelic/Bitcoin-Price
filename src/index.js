import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import { Container } from "react-bootstrap";
import CalendarsForm from "./components/form";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "./css/calendar.css";

import axios from "axios";
import LineChart from "./components/chart";

const App = () => {
  const [inputValues, setInputValues] = useState({ value1: "", value2: "" });
  const [results, setResults] = useState({});

  const saveInputValues = (value1, value2) => {
    setInputValues({ value1: value1, value2: value2 });
  };
  console.log(inputValues);

  useEffect(() => {
    axios
      .get(
        `https://api.coindesk.com/v1/bpi/historical/close.json?start=${inputValues.value1}&end=${inputValues.value2}`,
        { crossdomain: true }
      )
      .then((response) => setResults(response.data.bpi));
  }, [inputValues]);

  console.log(results);
  return (
    <Container>
      <CalendarsForm saveInputValues={saveInputValues} />
      <LineChart results={results} />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
