import { useHistory } from "react-router-dom";
import "./App.css";
import "./styles.css";
import UserService from "./services/UserService";

function App() {

const history = useHistory();

  return (
    <div className="App">
      <div id="title">
        <h1>
          Bem vindo aos nossos exercicios sobre Autorização e Autenticação de
          uma aplicação Client Frontend
        </h1>
      </div>
      <div id="content">
        <button id="logar" onClick={() => {
          UserService.doLogout();
          history.push("/login")}}>Fazer Login</button>
        <button id="api">Chamar API</button>
      </div>
    </div>
  );
}

export default App;
