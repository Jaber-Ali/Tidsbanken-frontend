import Keycloak from "keycloak-js";
const _kc = new Keycloak('/keycloak.json');

/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
const initKeycloak = (onAuthenticatedCallback) => {
    try {
        _kc.init({
            onLoad: 'check-sso',
            pkceMethod: 'S256',
        })
            .then((authenticated) => {
                onAuthenticatedCallback();
            })
    } catch (e) {

        console.log(e);
    }
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const doRegister = _kc.register;

const getToken = () => _kc.token;

const updateToken = (successCallback) =>
    _kc.updateToken(5)
        .then(successCallback)
        .catch(doLogin);

const isLoggedIn = () => !!_kc.token;

const getUsername = () => _kc.tokenParsed?.preferred_username;
const getAccess = () => _kc.tokenParsed?.access_token;
const getGivenName = () => _kc.tokenParsed?.given_name;
const getGivenFName = () => _kc.tokenParsed?.family_name;
const email = () => _kc.tokenParsed?.email;
const getTokenParsed = () => _kc.tokenParsed


export const getEmail = () => _kc.idTokenParsed?.email;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));


const KeycloakService = {
    initKeycloak,
    doLogin,
    doLogout,
    doRegister,
    isLoggedIn,
    getToken,
    updateToken,
    getUsername,
    hasRole,
    getEmail,
    getAccess,
    getGivenName,
    getGivenFName,
    email,
    getTokenParsed

};
export default KeycloakService;
