import React from "react";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import classes from "./Presentation.module.css";
import picture from "../../pictures/me.png";

const Presentation = () => {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.content}>
          <div className={classes.quarterCircle}></div>
          <div className={classes.intro}>
            <div>
              <h1>Frontend-Utvecklare med ett öga för detaljer!</h1>
              <p>
                Hej! Mitt namn är Tony Citterio och jag är en ivrig
                Frontend-Utvecklare och tekniknörd som bor i Malmö.
              </p>
            </div>
            <div>
              <img
                src={picture}
                alt="of Tony Citterio"
                className={classes.img}
              />
            </div>
          </div>
          <div className={classes.skills}>
            <div className={classes.tech}>
              <p>Min verktyglsåda</p>
            </div>
            <div className={classes.icons}>
              <FaHtml5 size={52} className={classes.htmlIcon} />
              <FaCss3Alt size={52} className={classes.cssIcon} />
              <div className={classes.javascriptIconContainer}>
                <RiJavascriptFill
                  size={63}
                  className={classes.javascriptIcon}
                />
              </div>
              <FaReact size={52} className={classes.reactIcon} />
              <SiTailwindcss size={42} className={classes.tailwindIcon} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
