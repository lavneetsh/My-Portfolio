import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>lavneetsharma123@gmail.com</span>
        <span>+91 7357593544</span>
        <div className="f-icons">
        <a href="https://instagram.com/lavneet_sharma_?igshid=YmJhNjkzNzY="> <Insta color="white" size={"3rem"} /></a>
          
          <a href="https://github.com/lavneetsh"> <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
