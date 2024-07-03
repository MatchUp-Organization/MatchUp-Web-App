import { Link } from "react-router-dom";
import { useState } from "react";
import Accordion from "../../components/Accordion";
import "./Home.css"; // Import your CSS file here
import MatchUpLogo from "../../assets/MatchUp-Logo.svg";
import GetStartedImg from "../../assets/home-getstarted.png";
import JoinUsSVG from "../../assets/home-joinus.svg";
import TellUsSVG from "../../assets/home-tellus.svg";
import PlayWithSVG from "../../assets/home-playwith.svg";
import '@fontsource/lato';
import PollImg from "../../assets/trust.png";
import BirdImg from "../../assets/heureux.png";

export default function Home() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="home__div">
            <header className="home__header  global__flex-between-row">
                <div className="home-header__left global__flex-center-row">
                    <img src={MatchUpLogo} alt="MatchUp Logo" className="home-header-left__logo" />
                    <h2 className="home-header-left__text">MatchUp</h2>
                </div>
                <div className="home-header__right global__flex-center-row">
                    <p className="home-header__button" >How it works</p>
                    <p className="home-header__button" >About us</p>
                    <p className="home-header__button" >Contact</p>
                    <div className="home-header__signup-button">
                    <Link to="/login" className="login-button">
                        <p className="home-header-signup__text">Sign Up</p>
                    </Link>
                    </div>
                </div>
            </header>
            {/*  */}
            <section className="section-getstarted global__flex-between-row">
                <div className="section-getstarted__left">
                    <div className="section-getstarted-left__textdiv">
                        <p className="section-getstarted-left__textdivtop">Stop wasting time in</p>
                        <p className="section-getstarted-left__textdivbottom">searching sport partners</p>
                    </div>
                    <div className="section-getstarted-left__button">
                        <p className="section-getstarted-left-button__text">Get Started</p>
                    </div>
                </div>
                <img src={GetStartedImg} alt="Football Match" className="section-getstarted__img" />
            </section>
            {/*  */}
            <section className="section-how">
                <div className="section-how__title">
                    <p className="section-how-title__text">How it works?</p>
                    <div className="section-how-title__div"/>
                </div>
                <div className="section-how__content  global__flex-between-row">
                    <div className="section-how-content__child">
                        <img src={JoinUsSVG} alt="MatchUp Logo" className="section-how-content__img" />
                        <p className="section-how-content__title">Join Us</p>
                        <p className="section-how-content__desc">Use our website or download our<br/>mobile app to create an account and<br/>discover MatchUp</p>
                    </div>
                    <div className="section-how-content__child">
                        <img src={TellUsSVG} alt="MatchUp Logo" className="section-how-content__img" />
                        <p className="section-how-content__title">Tell us more about yourself</p>
                        <p className="section-how-content__desc">Fill in your details and we’ll find<br/>all your sporty needs</p>
                    </div>
                    <div className="section-how-content__child">
                        <img src={PlayWithSVG} alt="MatchUp Logo" className="section-how-content__img" />
                        <p className="section-how-content__title">Play with partners</p>
                        <p className="section-how-content__desc">That's it ! We’ll help you<br/>find some sport partners and<br/>the field is yours !</p>
                    </div>
                </div>
            </section>
            {/*  */}
            <section className="section-joinus">
                <p className="section-joinus__title">Join us today!</p>
                <div className="section-joinus__content">
                    <div className="section-joinus__button1">
                        <p className="section-joinus__buttontext1">Download app</p>
                    </div>
                    <div className="section-joinus__button2">
                        <p className="section-joinus__buttontext2">Open in browser</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

/* <Link to="/login" className="login-button">
                    Login
                </Link> */