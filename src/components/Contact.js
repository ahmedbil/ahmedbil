import React, { Component } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiMicrosoftoutlook } from "react-icons/si";

class Contact extends Component {
  handleGmailClick = (email) => {
    window.location.href = `mailto:ahmedbil.157@gmail.com`;
  };
  handleOutlookClick = (email) => {
    window.location.href = `mailto:a9bilal@outlook.ca`;
  };


  render() {
    var sectionName = "Contact";


    return (
      <section id="contact">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12">
          <div className="social-links">
          <span key="github" className="m-4">
            <a href="https://github.com/ahmedbil" target="_blank" rel="noopener noreferrer">
              <FaGithub color="black" size="36"/>
            </a>
          </span>
          <span key="linkedin" className="m-4">
            <a href="https://www.linkedin.com/in/ahmed-bilal-6a5b051b3/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin color="0766c2" size="36"/>
            </a>
          </span>
          <span key="gmail" className="m-4">
            <a href="mailto:ahmedbil.157@gmail.com?body=Hi Ahmed, lets connect!" target="_blank" rel="noopener noreferrer">
              <SiGmail color="#e94436" size="36"/>
            </a>
          </span>
          <span key="outlook" className="m-4">
            <a href="mailto:a9bilal@outlook.ca?body=Hi Ahmed, lets connect!" target="_blank" rel="noopener noreferrer">
              <SiMicrosoftoutlook color="#0078d3" size="36"/>
            </a>
          </span>
          </div>
          <div className="copyright py-4 text-center">
            <h3 className="container">
              Lets Connect! 🙂
            </h3>
          </div>
        </div>
          </div>
      </section>
    );
  }
}

export default Contact;
