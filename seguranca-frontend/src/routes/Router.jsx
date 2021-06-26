import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Login from "../Login";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="">
            <App />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
