import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Container } from "react-bootstrap";
import CalendarsForm from "./components/form";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "./css/calendar.css";

const App = () => {
  const [inputValues, setInputValues] = useState({ value1: "", value2: "" });
  const [results, setResults] = useState([]);

  const saveInputValues = (value1, value2) => {
    setInputValues({ value1: value1, value2: value2 });
  };
  console.log(inputValues);

  return (
    <Container>
      <CalendarsForm saveInputValues={saveInputValues} />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
