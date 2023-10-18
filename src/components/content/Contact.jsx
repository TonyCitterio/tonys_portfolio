import React from "react";
import { FaMailchimp, FaMapLocation, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.content}>
          <div className={classes.intro}>
            <h3>Kontakta mig</h3>
            <div className={classes.social}>
              <a
                href="https://www.linkedin.com/in/tony-citterio-8bb725222/"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                <FaLinkedinIn
                  size={23}
                  className={classes.linkedinIcon}
                ></FaLinkedinIn>
              </a>
              <a
                href="https://github.com/TonyCitterio"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.link}
              >
                <FaGithub size={23}></FaGithub>
              </a>
            </div>
          </div>
          <div className={classes.info}>
            <div>
              <FaMapLocation size={32} className={classes.icon}></FaMapLocation>
              <p>
                <span>Plats</span>
                <br /> Malmö, Sverige
              </p>
            </div>
            <div>
              <FaMailchimp size={35} className={classes.icon}></FaMailchimp>
              <p>
                <span>Email</span>
                <br />
                <a href="mailto:tcitterio@hotmail.com">tcitterio@hotmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
