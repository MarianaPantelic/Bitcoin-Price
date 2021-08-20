import React, { useState } from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "./css/calendar.css";

import { Container } from "react-bootstrap";
import CalendarsForm from "./components/form";

const App = () => {
  const [inputValues, setInputValues] = useState({ value1: "", value2: "" });

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
