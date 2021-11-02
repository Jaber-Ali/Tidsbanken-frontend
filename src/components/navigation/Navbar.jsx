import React from "react";
import { useState } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUser, faSignOutAlt,faClock} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import KeycloakService from '../../services/KeyclockService'
import "./Navbar.css";

const NavbarComponent = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(KeycloakService.isLoggedIn());

  const handleLogout = () => {
    KeycloakService.doLogout();
  };
  return (
    <Navbar bg="navbar navbar-primary bg-primary" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon>Tidsbanken</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="me-auto"></Nav>
        <Nav>
           {/* Log In button */}
           {!isLoggedIn && (
            <Button
              variant="primary"
              id="btn"
              onClick={() => KeycloakService.doLogin()}
            >
              Log In
            </Button>
                 )}

           {/* Sign Up button */}
           {!isLoggedIn && (
            <Button
              variant="primary"
              id="btn"
              onClick={() => KeycloakService.doRegister()}
            >
              Sign Up
            </Button>
          )}
        
          <NavDropdown
            title={
              <FontAwesomeIcon className="" icon={faUser}></FontAwesomeIcon>
            }
            align="end"
            className="navbar-dropdown"
          >
            {/* Displays the signed in user. (fullname) */}
            {isLoggedIn ? (
              <NavDropdown.Header>Signed in as</NavDropdown.Header>
            ) : null}
            {isLoggedIn ? (
              <NavDropdown.Header>{KeycloakService.getGivenName()}</NavDropdown.Header>
            ) : null}
       
          {/* Profile dropdown item*/}
       {isLoggedIn ? <NavDropdown.Divider /> : null}
            {isLoggedIn ? (
              <NavDropdown.Item as={Link}/*onClick={() => goToProfilePage()}*/ to="/profile">
                {"My Profile"}
              </NavDropdown.Item>
            ) : null}

            {/* Logout dropdown item*/}
            {isLoggedIn ? <NavDropdown.Divider /> : null}
            {isLoggedIn ? (
              <NavDropdown.Item onClick={() => handleLogout()}>
                <FontAwesomeIcon
                  className="sign-out-icon"
                  icon={faSignOutAlt}
                ></FontAwesomeIcon>
                {"Sign Out"}
              </NavDropdown.Item>
            ) : null}

            {/* Login/Sign Up dropdown item*/}
            {!isLoggedIn ? (
              <NavDropdown.Item onClick={() => KeycloakService.doLogin()}>
                <FontAwesomeIcon
                  className="sign-in-icon"
                  icon={faSignInAlt}
                ></FontAwesomeIcon>
                {"Log In / Sign Up"}
              </NavDropdown.Item>
            ) : null}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};






export default NavbarComponent

