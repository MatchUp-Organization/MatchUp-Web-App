import React from "react";
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src="logo.png" alt="MatchUp Logo" className={styles.logoImage} />
        MatchUp
      </div>
      <div className={styles.menu}>
        <a href="#how-it-works">How it works</a>
        <a href="#about-us">About us</a>
        <a href="#contact">Contact</a>
        <button className={styles.signupButton}>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
