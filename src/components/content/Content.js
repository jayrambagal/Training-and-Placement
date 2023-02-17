import React from "react";
import classNames from "classnames";
import { Container} from "react-bootstrap";
import NavBar from "./Navbar";
import { Route,Routes } from "react-router-dom";

import Home from "../Feed_Components/Home";

import Fillform from "../Feed_Components/Fillform";
import "./content.css"

const Content = (props) => {
  return (
    <div className="navdiv">
    <Container
        fluid
        className={classNames("content", { "is-open": props.isOpen })}
        id="content"
      >
        <NavBar toggle={props.toggle} />

        <Routes>
        <Route path="/about" ></Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/companiesdash"  />
        <Route path="/contact"  />
        <Route path="/faq"  />
        <Route path="/form" element={<Fillform/>} />
        <Route path="/protfolio"  />
        <Route path="/tpo"  />
        </Routes>
        
      </Container>
      
    </div>
  )
}

export default Content