import React, { useState, useEffect } from "react";
import { RiDropdownList } from "react-icons/ri";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: "smooth",
    });
  }

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isDropdownOpen && !event.target.closest(`.${classes.dropdown}`)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      scrollToTop();
    }
  }

  return (
    <>
      <nav className={classes.navbar}>
        <h1>Tony Citterio</h1>
        <ul className={classes.ulBig}>
          <li tabIndex={0} onClick={scrollToTop} onKeyDown={handleKeyDown}>Hem</li>
          <li><a href="#about" data-scroll-to="about" onClick={scrollToSection}>Om mig</a></li>
          <li><a href="#projects" data-scroll-to="projects" onClick={scrollToSection}>Mina Projekt</a></li>
          <li><a href="#contact" data-scroll-to="contact" onClick={scrollToSection}>Kontakt</a></li>
        </ul>
        <div className={classes.dropdown}>
          <button className={classes.dropdownIcon} onClick={toggleDropdown}>
            <RiDropdownList size={35} />
          </button>
          {isDropdownOpen && (
            <div className={classes.dropdownMenu}>
              <ul className={classes.ulSmall}>
                <li onClick={() => {scrollToTop(); setIsDropdownOpen(false);}}>Hem</li>
                <li><a href="#about" data-scroll-to="about" onClick={(e) => {scrollToSection(e); setIsDropdownOpen(false);}}>Om mig</a></li>
                <li><a href="#projects" data-scroll-to="projects" onClick={(e) => {scrollToSection(e); setIsDropdownOpen(false);}}>Mina Projekt</a></li>
                <li><a href="#contact" data-scroll-to="contact" onClick={(e) => {scrollToSection(e); setIsDropdownOpen(false);}}>Kontakt</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
