import React from "react";
import styles from "./about.module.css";

const AboutUs: React.FC = () => {
  return (
    <div className={styles.container} id="about-us">
      <h2 className={styles.title}>About us</h2>
      <div className={styles.separator}></div>
      <p className={styles.intro}>
        Do you dream of playing soccer or other sports near you but don’t know
        where to find available pitches or who to play with ?<br />
        MatchUp is the mobile application for you ! With MatchUp, you can quickly
        and easily discover nearby sports fields and organize matches
        <br /> with other enthusiasts like yourself.
      </p>
      <h3 className={styles.subtitle}>Find nearby fields</h3>
      <p>
        Thanks to our intuitive geolocation, MatchUp lets you instantly locate
        soccer fields, basketball courts, tennis courts and much more, all
        within walking distance of your home.<br/> No more hours wasted looking for a
        place to play : with MatchUp, the best sports grounds are within easy
        reach.
      </p>
      <h3 className={styles.subtitle}>Organize and join matches</h3>
      <p>
        Whether you want to organize a match between friends or join an already
        scheduled game, MatchUp makes it easy to connect players. Create your
        sporting event in just a few clicks,<br/> invite your friends, or join an
        existing game. You can even see the level of players for balanced, fun
        matches.
      </p>
      <h3 className={styles.subtitle}>
        Connect with a community of enthusiasts
      </h3>
      <p>
        MatchUp isn't just a tracking application: it's also a community of
        sports enthusiasts. Share experiences, exchange tips and find regular
        playing partners.<br/> Our platform fosters encounters and friendships around
        sport.
      </p>
    </div>
  );
};

export default AboutUs;
