import React from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faUser, faSignOutAlt,faClock} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarComponent = () => {


  return (
    <Navbar bg="navbar navbar-primary bg-primary" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/"><FontAwesomeIcon icon={faClock}></FontAwesomeIcon>Tidsbanken</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="me-auto"></Nav>
        <Nav>
            <Button
              variant="primary"
              id="btn"
              
            >
              Log In
            </Button>
    

            <Button
              variant="primary"
              id="btn"
           
            >
              Sign Up
            </Button>
        
          <NavDropdown
            title={
              <FontAwesomeIcon className="" icon={faUser}></FontAwesomeIcon>
            }
            align="end"
            className="navbar-dropdown"
          >
              <NavDropdown.Header>Signed in as</NavDropdown.Header>
         
              <NavDropdown.Header>Jaber Ali</NavDropdown.Header>
       

        <NavDropdown.Divider /> 
          
              <NavDropdown.Item as={Link}/*onClick={() => goToProfilePage()}*/ to="/profile">
                {"My Profile"}
              </NavDropdown.Item>

            {/* Logout dropdown item*/}
        <NavDropdown.Divider /> 
         
              <NavDropdown.Item >
                <FontAwesomeIcon
                  className="sign-out-icon"
                  icon={faSignOutAlt}
                ></FontAwesomeIcon>
                {"Sign Out"}
              </NavDropdown.Item>
    

          
          
              <NavDropdown.Item >
                <FontAwesomeIcon
                  className="sign-in-icon"
                  icon={faSignInAlt}
                ></FontAwesomeIcon>
                {"Log In / Sign Up"}
              </NavDropdown.Item>
 
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};





export default NavbarComponent
