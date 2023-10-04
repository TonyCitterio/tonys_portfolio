import React from "react";
import { FaMailchimp, FaMapLocation } from "react-icons/fa6";
import classes from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.content}>
          <div className={classes.card}>
            <div className={classes.intro}>
              <h3>Kontakta mig</h3>
            </div>
            <div className={classes.info}>
              <div>
                <FaMapLocation
                  size={32}
                  className={classes.icon}
                ></FaMapLocation>
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
                  <a href="mailto:tcitterio@hotmail.com">
                    tcitterio@hotmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
