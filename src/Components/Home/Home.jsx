// import React from "react";
import "../Home/home.css";
import React from "react";
// import { init } from "ityped";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/programmer.png";
import glassesimoji from "../../img/glassesimoji.png";
// import thumbup from "../../img/thumbup.png";
// import crown from "../../img/crown.png";
// import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
// import { Link } from "react-scroll";

const Home = () => {

    const date = new Date();
    const currentTime = date.getHours();
    
    let greeting;
    
    if (currentTime >= 0 && currentTime <= 12) {
      greeting = "Good Morning";
    } else if (currentTime > 12 && currentTime <= 18) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }



  // Transition
  const transition = { duration: 2, type: "spring" };

  //   // context
  //   const theme = useContext(themeContext);
  //   const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}

          <span>{greeting}</span>
          <span>
            <Typewriter options={
              {
                autoStart:true,
                loop:true,
                delay:20,
                strings:[
                  "I am Lavneet Sharma",
                  "I am a Front-End Developer",
                  "I love to code in React"
                ],
              }
            }/>
          </span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://github.com/lavneetsh">
          <img src={Github} alt="" />
          </a>
          <a href="https://linkedin.com/in/lavneet-sharma-99312b202/">
          <img src={LinkedIn} alt="" />
          </a>
          <a href="https://instagram.com/lavneet_sharma_?igshid=YmJhNjkzNzY=">
          <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          {/* <FloatinDiv img={crown} text1="Web" text2="Developer" /> */}
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          {/* <FloatinDiv img={thumbup} text1="Best Design" text2="Award" /> */}
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Home;
