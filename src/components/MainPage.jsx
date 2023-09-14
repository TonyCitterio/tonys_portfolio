import React from "react";
import Navbar from "./general/Navbar";
import classes from "./MainPage.module.css";
import Presentation from "./content/Presentation";
const MainPage = () => {
  return (
    <>
      <Navbar />
      <main className={classes.main}>
        <Presentation />
      </main>
    </>
  );
};

export default MainPage;
