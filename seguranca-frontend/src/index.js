import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserService from "./services/UserService";
import HttpService from "./services/HttpSevice";

const renderApp = () =>
  ReactDOM.render(
    <App/>,
    document.getElementById("root")
  );

UserService.initKeycloak(renderApp);

HttpService.configure();
