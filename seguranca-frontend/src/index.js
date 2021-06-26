import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserService from "./services/UserService";
import HttpService from "./services/HttpService";
import Router from "./routes/Router";

const renderApp = () =>
  ReactDOM.render(<Router />, document.getElementById("root"));

UserService.initKeycloak(renderApp);

HttpService.configure();
