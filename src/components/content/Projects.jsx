import React from "react";
import { FaGithub, FaLink } from "react-icons/fa6";
import classes from "./Projects.module.css";
// import cleves from "../../pictures/cleveDubbelBlue.jpeg";
import cleveIpad from "../../pictures/cleve.jpeg";

const Projects = () => {
  return (
    <>
      <section className={classes.container}>
        <div className={classes.content}>
          <div className={classes.intro}>
            <h2>Min Portfolio</h2>
            <h3>Här är några projekt jag gjort!</h3>
          </div>
          <div className={classes.card}>
            <div>
              <img src={cleveIpad} alt="Mockup of Cleves Brewhouses Website" />
            </div>
            <div>
              <div className={classes.info}>
                <h3>Cleves Brewhouse</h3>
                <p>
                  En hemsida som jag gjort till en kompis som brygger öl och som
                  har som mål att starta ett eget mikrobryggeri!
                </p>
              </div>
              <div className={classes.doneInContainer}>
                <p className={classes.doneIn}>React</p>
                <p className={classes.doneIn}>CSS</p>
              </div>
              <div className={classes.linkContainer}>
                <a
                  href="https://github.com/TonyCitterio/cleves_brewhouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                >
                  Ta mig till koden
                  <FaGithub size={25} className={classes.icon}></FaGithub>
                </a>
                <a
                  href="https://portfolio-44611.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                >
                  Ta mig till sidan{" "}
                  <FaLink size={25} className={classes.icon}></FaLink>
                </a>
              </div>
            </div>
          </div>
          <div className={classes.moreToCome}>
            <div className={classes.halfCircle}></div>
            <h3>Mer Projekt på väg!</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
