import Keycloak from "keycloak-js";

const _kc = new Keycloak("/keycloak.json");

const initKeycloak = (onAuthenticatedCallbak) => {
  _kc
    .init({
      onload: "check-sso",
      silentCheckSsoRedirectUri:
        window.location.origin + "/silent-chck-sso.html",
      pkceMethod: "S256",
    })
    .then((authrnticated) => {
      if (authrnticated) {
        onAuthenticatedCallbak();
      } else {
        console.warn("not authenticated!");
        doLogin();
      }
    });
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const updateTocken = (successCallback) =>
  _kc.updateTocken(5).then(successCallback).catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  getToken,
  updateTocken,
  getUsername,
  hasRole,
};

export default UserService;
