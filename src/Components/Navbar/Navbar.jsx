import React from "react";
import { Link } from "react-scroll";
import "../Navbar/navbar.css"
import useSound from 'use-sound';
import sound from "../../img/Mouse-Click-00-c-FesliyanStudios.com.mp3"

const Navbar = () => {
  const [play, { stop }] = useSound(sound);
  return (
    <div>
      <div className="n-wrapper" id="Navbar">
        {/* left */}
        <div className="n-left">
          <div className="n-name">Lavneet Sharma</div>
        </div>
        {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link to="Navbar" spy={true} smooth={true} onMouseEnter={play} onMouseLeave={stop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="education" spy={true} smooth={true} onMouseEnter={play} onMouseLeave={stop}>
                  Education
                </Link>
              </li>
              <li>
                <Link to="skills" spy={true} smooth={true} onMouseEnter={play} onMouseLeave={stop}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="projects" spy={true} smooth={true} onMouseEnter={play} onMouseLeave={stop}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} onMouseEnter={play} onMouseLeave={stop}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
