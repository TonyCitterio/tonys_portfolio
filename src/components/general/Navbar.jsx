import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("data-scroll-to");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = 30;
      const targetPosition = targetElement.offsetTop - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <>
      <nav className={classes.navbar}>
        <h1>Tony Citterio</h1>
        <ul>
          <li><a href="#home" data-scroll-to="home" onClick={scrollToSection}>Hem</a></li>
          <li><a href="#about" data-scroll-to="about" onClick={scrollToSection}>Om mig</a></li>
          <li><a href="#projects" data-scroll-to="projects" onClick={scrollToSection}>Mina Projekt</a></li>
          <li><a href="#contact" data-scroll-to="contact" onClick={scrollToSection}>Kontakt</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
