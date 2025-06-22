
import "../../Components/Skills/skills.css"
import React from "react";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
// import Humble from "../../img/humble.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import Resume from './resume.pdf';

const Skills = () => {

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="skills">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span>My Awesome</span>
        <span>Skills</span>
        <span style={{fontSize:"20px"}}>
        A Good Front-End web developer creating visually<br /> stunning Front-End for Web Sites.
          <br />
         Love to design Web Sites Especially using React
        </span>
        {/* <a href={Resume} download> */}
        <button class="custom-btnn btnn-4"><span>Download Resume</span></button>
        {/* </a> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "40rem", top:"-8rem" }}
          whileInView={{ left: "8rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
           
            heading={"Front-End Developer"}
            detail={"Html5, Css3, JavaScript, React, MySQL, MongoBD,XML"}
          
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-1rem", top: "-1rem" }}
          whileInView={{ left: "30rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Design & Language"}
            detail={"Java, Solidity,Bootstrap , Adobe Photoshop, Content Writing "}
          />
        </motion.div>
        {/* 3rd */}
        {/* <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          /> */}
        {/* </motion.div> */}
        <div
          className="blur s-blur2"
          style={{ background: "purple"}}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
