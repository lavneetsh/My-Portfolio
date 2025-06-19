import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import contact from "../../img/contact.png"
// import { themeContext } from "../../Context";
const Contact = () => {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_594oh0c",
        "template_t6n839l",
        form.current,
        "BgOqIxgjdNJ-t_nSr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact">

      <div className="contact-image">
        <div className="contact-image-holder">
          <img src={contact} alt="contact" />
        </div>
      </div>

    <div className="contact-form" id="contact">
      
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form className="form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button btn btn-warning"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "rgb(172, 234, 234)" }}
          ></div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
