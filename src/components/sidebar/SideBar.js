import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faTimes,
  faBuilding,
  faLock,
  faFile,
  faUserTie,
  
} from "@fortawesome/free-solid-svg-icons";
import Submenu from "./Sub";
import { Nav, Button} from "react-bootstrap";
import classNames from "classnames";
import "./sidebar.css"

const SideBar = (props) => {
  const demo = () =>{
    
    
  }
  return (
    <div className={classNames("sidebar", { "is-open": props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <h3>GHRCEM Training and Placement</h3>
        </div>

        <Nav className="flex-column pt-2">
          <p className="ml-3">Dashboard</p>

          <Nav.Item className="active">
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="active" onClick={demo}>
            <Nav.Link href="/form">
              <FontAwesomeIcon icon={faFile} className="mr-2"/>
              Fill from
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="active">
            <Nav.Link href="/companiesdash">
              
            <FontAwesomeIcon icon={faBuilding} className="mr-2" />
              Companies Dashboard
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="active">
            <Nav.Link href="/tpo">
              
            <FontAwesomeIcon icon={faUserTie} className="mr-2" />
              TPO Registration
            </Nav.Link>
          </Nav.Item>

          

          <Submenu
            title="Authentication"
            icon={faLock}
            items={["LogIn","LogOut", "Forget-Password"]}
          />

          <Nav.Item>
            <Nav.Link href="/about">
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/protfolio">
              <FontAwesomeIcon icon={faImage} className="mr-2" />
              Portfolio
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/faq">
              <FontAwesomeIcon icon={faQuestion} className="mr-2" />
              FAQ
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/contact">
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
  )
}


export default SideBar