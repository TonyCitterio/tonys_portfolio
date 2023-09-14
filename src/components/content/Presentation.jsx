import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import classes from "./Presentation.module.css";
import picture from "../../pictures/jag1.png";

const Presentation = () => {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.content}>
          <div className={classes.intro}>
            <div>
              <h1>Frontend-Utvecklare med ett öga för detaljer!</h1>
              <p>
                Hej! Mitt namn är Tony Citterio och jag är en ivrig
                Frontend-Utvecklare och tekniknörd som bor i Malmö.
              </p>
            </div>
            <div>
              <img src={picture} alt="of Tony Citterio" className={classes.img} />
            </div>
          </div>
          <div className={classes.skills}>
            <p className={classes.tech}>Tech Stack :</p>
            <FaHtml5 size={50} className={classes.htmlIcon} />
            <FaCss3Alt size={50} className={classes.cssIcon} />
            <div className={classes.javascriptIconContainer}>
              <RiJavascriptFill size={61} className={classes.javascriptIcon} />
            </div>
            <FaReact size={50} className={classes.reactIcon}/>
          <SiTailwindcss size={40} className={classes.tailwindIcon}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
