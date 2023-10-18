import React from "react";
import { FaRegCopyright, FaLinkedin, FaGithub } from "react-icons/fa6";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={classes.col}>
          <FaRegCopyright className={classes.copyrightIcon}></FaRegCopyright>
          <p>Copyright 2023</p>
        </div>
        <div className={classes.col}>
          <a
            href="https://www.linkedin.com/in/tony-citterio-8bb725222/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            <FaLinkedin size={22} className={classes.linkedinIcon}></FaLinkedin>
          </a>
          <a
            href="https://github.com/TonyCitterio"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            <FaGithub size={22}></FaGithub>
          </a>
        </div>
        <div className={classes.col}>
          <p>
            "My mama always said, 'Life is like a box of chocolates. You never
            know what you're gonna get.'" - Forrest Gump
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
