import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/main.css";
import "./css/calendar.css";

import { Container } from "react-bootstrap";
import CalendarsForm from "./components/form";

const App = () => {
  return (
    <Container>
      <CalendarsForm />
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
