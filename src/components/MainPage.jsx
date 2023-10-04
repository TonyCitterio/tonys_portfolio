import React from "react";
import Navbar from "./general/Navbar";
import classes from "./MainPage.module.css";
import Presentation from "./content/Presentation";
import AboutMe from "./content/AboutMe";
import Projects from "./content/Projects";
import Contact from "./content/Contact";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <section id="home">
          <Presentation />
        </section>
        <section id="about">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default MainPage;
