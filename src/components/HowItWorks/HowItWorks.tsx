import React from "react";
import styles from "./howItWorks.module.css";

// Assuming you have these icons saved in the assets folder
import join from "../../assets/join.svg";
import play from "../../assets/play.svg";
import tell from "../../assets/tell.svg";

const HowItWorks: React.FC = () => {
  return (
    <div className={styles.container} id="how-it-works">
      <h2>How it works?</h2>
      <div className={styles.separator}></div>  {/* Here is the new div for the blue bar */}
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <img src={join} alt="Create Account" />
          <h3 className={styles.stepTitle}>Join Us</h3>
          <p>
            Use our website or download our
            <br />
            mobile app to create an account and
            <br />
            discover MatchUp
          </p>
        </div>
        <div className={styles.step}>
          <img src={tell} alt="Play with Partners" />
          <h3 className={styles.stepTitle}>Play with partners</h3>
          <p>
            Fill in your details and we’ll find
            <br />
            all your sporty needs
          </p>
        </div>
        <div className={styles.step}>
          <img src={play} alt="Fill Details" />
          <h3 className={styles.stepTitle}>Tell us more about yourself</h3>
          <p>
            That's it ! We’ll help you
            <br />
            find some sport partners and
            <br />
            the field is yours !
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
