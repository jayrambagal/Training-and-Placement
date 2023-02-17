import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";
import "./Navbar.css"

const NavBar = (props) => {
  return (
    <div className="main_container">
    <Navbar
    bg="light"
    className="navbar"
    expand
  >
    <Button variant="outline-info" onClick={props.toggle}>
      <FontAwesomeIcon icon={faAlignLeft} />
    </Button>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav" className="">
      <Nav className="ml-auto" navbar>
        <Nav.Link href="/about">page</Nav.Link>
        <Nav.Link href="#">page</Nav.Link>
        <Nav.Link href="#">page</Nav.Link>
        <Nav.Link href="#">page</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    </div>
  )
}

export default NavBar

