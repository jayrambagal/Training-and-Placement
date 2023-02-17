import React from "react";
import classNames from "classnames";
import { Container} from "react-bootstrap";
import NavBar from "./Navbar";
import { Route,Routes } from "react-router-dom";
import About from "../Feed_Components/About";
import Home from "../Feed_Components/Home";
import CompaniesDash from "../Feed_Components/CompaniesDash";
import Contact from "../Feed_Components/Contact";
import FAQ from "../Feed_Components/FAQ";
import Portfolio from "../Feed_Components/Portfolio";
import TpoRegistration from "../Feed_Components/TpoRegistration";
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
        <Route path="/about" element={<About/>}></Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/companiesdash" element={<CompaniesDash/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/form" element={<Fillform/>} />
        <Route path="/protfolio" element={<Portfolio/>} />
        <Route path="/tpo" element={<TpoRegistration/>} />
        </Routes>
        
      </Container>
      
    </div>
  )
}

export default Content