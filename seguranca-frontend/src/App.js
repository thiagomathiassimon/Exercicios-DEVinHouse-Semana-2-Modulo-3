import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";
import "./styles.css";
import UserService from "./services/UserService";
import axios from "axios";

function App() {
  const history = useHistory();

  const [message, setMessage] = useState();

  const handleChamarAPI = () => {
    axios
      .get("http://localhost:8080/exercicios")
      .then((response) => setMessage(response.data));
  };

  return (
    <div className="App">
      <div id="title">
        <h1>
          Bem vindo aos nossos exercicios sobre Autorização e Autenticação de
          uma aplicação Client Frontend
        </h1>
      </div>
      <div id="content">
        <button
          id="logar"
          onClick={() => {
            UserService.doLogout();
            history.push("/login");
          }}
        >
          Fazer Login
        </button>
        <button id="api" onClick={handleChamarAPI}>
          Chamar API
        </button>
      </div>
      <div id="message"><h2>{message}</h2></div>
    </div>
  );
}

export default App;
