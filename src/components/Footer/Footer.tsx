import React from "react";
import styles from "./footer.module.css";
import LinkedInIcon from "../../assets/link.svg";
import InstagramIcon from "../../assets/insta.svg";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.helpSection}>
        <h2 className={styles.footerTitle}>Need help with<br/>anything?</h2>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedInIcon}
              alt="LinkedIn"
              className={styles.socialIcon}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={InstagramIcon}
              alt="Instagram"
              className={styles.socialIcon}
            />
          </a>
        </div>
      </div>
      <div className={styles.linkSections}>
        <div className={styles.linkColumn}>
          <h3>Home</h3>
          <a href="#">Why we matter</a>
          <a href="#">How system works</a>
          <a href="#">Pricing</a>
        </div>
        <div className={styles.linkColumn}>
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
        <div className={styles.linkColumn}>
          <h3>Legal</h3>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy & Policy</a>
        </div>
        <div className={styles.linkColumn}>
          <h3>Help</h3>
          <a href="#">FAQs</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
