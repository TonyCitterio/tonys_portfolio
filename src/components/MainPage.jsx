import React from "react";
import Navbar from "./general/Navbar";
import classes from "./MainPage.module.css";
import Presentation from "./content/Presentation";
import AboutMe from "./content/AboutMe";
import Projects from "./content/Projects";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <Presentation />
        <AboutMe />
        <Projects />
      </main>
    </>
  );
};

export default MainPage;
