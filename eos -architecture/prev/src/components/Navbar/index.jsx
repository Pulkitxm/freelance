import React from "react";
import Text from "../Text";
import PropTypes from "prop-types";

import "./index.css";
import logoImg from "../../assets/logo.png";
const Navbar = ({highlight}) => {
  return (
    <nav className="navbar" style={{backgroundColor:highlight?"#D79E7E":"#0003",borderBottom:!highlight?"solid 2px rgb(255 255 255 / 49%)":null}}>

      <div className="logo">
        <img src={logoImg} alt="logo"  />
        <div className="txt" style={{color:highlight?"black":"white"}}>
          <p>eos</p>
          <p>architecture</p>
        </div>
      </div>

      <div className="navigators">
        <Text color={highlight?"black":"white"} text={"Home"} />
        <Text color={highlight?"black":"white"} text={"About us"} />
        <Text color={highlight?"black":"white"} text={"Workshops"} />
        <Text color={highlight?"black":"white"} text={"Projects"} />
        <Text color={highlight?"black":"white"} text={"Community"} />
        <Text color={highlight?"black":"white"} text={"Products"} />
        <Text color={highlight?"black":"white"} text={"Contact us"} />
      </div>
      
    </nav>
  );
};

Navbar.propTypes = {
  highlight: PropTypes.bool
};

export default Navbar;
