import { Link } from "react-router-dom";
import { useState } from "react";
import Accordion from "../../components/Accordion";
import "./LandingPage.css"; // Import your CSS file here
import MatchUpLogo from "../../assets/MatchUp-Logo.svg";
import GetStartedImg from "../../assets/home-getstarted.png";
import JoinUsSVG from "../../assets/home-joinus.svg";
import TellUsSVG from "../../assets/home-tellus.svg";
import PlayWithSVG from "../../assets/home-playwith.svg";
import InstagramSVG from "../../assets/instagram.svg";
import LinkedInSVG from "../../assets/linkedin.svg";
import '@fontsource/lato';
import PollImg from "../../assets/trust.png";
import BirdImg from "../../assets/heureux.png";

export default function LandingPage() {
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
                    <a href="#section-how">
                        <p className="home-header__button" >How it works</p>
                    </a>
                    <a href="#section-aboutus">
                        <p className="home-header__button" >About us</p>
                    </a>
                    <a href="#section-question">
                        <p className="home-header__button" >Contact</p>
                    </a>
                    <div className="home-header__signup-container">
                        <Link to="/login" className="login-button">
                            <div className="home-header__signup-button">
                                <p className="home-header-signup__text">Sign Up</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </header>
            {/*  */}
            <section className="section-getstarted global__flex-between-row" id="section-getstarted">
                <div className="section-getstarted__left">
                    <div className="section-getstarted-left__textdiv">
                        <p className="section-getstarted-left__textdivtop">Stop wasting time in</p>
                        <p className="section-getstarted-left__textdivbottom">searching sport partners</p>
                    </div>
                    <Link to="/login" className="login-button">
                        <div className="section-getstarted-left__button">
                            <p className="section-getstarted-left-button__text">Get Started</p>
                        </div>
                    </Link>
                </div>
                <img src={GetStartedImg} alt="Football Match" className="section-getstarted__img" />
            </section>
            {/*  */}
            <section className="section-how" id="section-how">
                <div className="section-how__title">
                    <p className="section-how-title__text">How it works?</p>
                    <div className="section-how-title__div" />
                </div>
                <div className="section-how__content  global__flex-between-row">
                    <div className="section-how-content__child">
                        <img src={JoinUsSVG} alt="MatchUp Logo" className="section-how-content__img" />
                        <p className="section-how-content__title">Join Us</p>
                        <p className="section-how-content__desc">Use our website or download our<br />mobile app to create an account and<br />discover MatchUp</p>
                    </div>
                    <div className="section-how-content__child">
                        <img src={TellUsSVG} alt="MatchUp Logo" className="section-how-content__img" />
                        <p className="section-how-content__title">Tell us more about yourself</p>
                        <p className="section-how-content__desc">Fill in your details and we’ll find<br />all your sporty needs</p>
                    </div>
                    <div className="section-how-content__child">
                        <img src={PlayWithSVG} alt="MatchUp Logo" className="section-how-content__img" />
                        <p className="section-how-content__title">Play with partners</p>
                        <p className="section-how-content__desc">That's it ! We’ll help you<br />find some sport partners and<br />the field is yours !</p>
                    </div>
                </div>
            </section>
            {/*  */}
            <section className="section-joinus" id="section-joinus">
                <p className="section-joinus__title">Join us today!</p>
                <div className="section-joinus__content">
                    <div className="section-joinus__button1" title="No link available yet">
                        <p className="section-joinus__buttontext1">Download app</p>
                    </div>
                    <Link to="/login" className="login-button">
                        <div className="section-joinus__button2">
                            <p className="section-joinus__buttontext2">Open in browser</p>
                        </div>
                    </Link>
                </div>
            </section>
            {/*  */}
            <section className="section-aboutus" id="section-aboutus">
                <p className="section-aboutus__title">About us</p>
                <div className="section-aboutus__div" />
                <p className="section-aboutus__text">Do you dream of playing soccer or other sports near you but don’t know where to find available pitches or who to play with ? MatchUp is the mobile application for you ! With MatchUp, you can quickly and easily discover nearby sports fields and organize matches with other enthusiasts like yourself.</p>
                <p className="section-aboutus__subtitle">Find nearby fields</p>
                <p className="section-aboutus__text">Thanks to our intuitive geolocation, MatchUp lets you instantly locate soccer fields, basketball courts, tennis courts and much more, all within walking distance of your home. No more hours wasted looking for a place to play: with MatchUp, the best sports grounds are within easy reach.</p>
                <p className="section-aboutus__subtitle">Organize and join matches</p>
                <p className="section-aboutus__text">Whether you want to organize a match between friends or join an already scheduled game, MatchUp makes it easy to connect players. Create your sporting event in just a few clicks, invite your friends, or join an existing game. You can even see the level of players for balanced, fun matches.</p>
                <p className="section-aboutus__subtitle">Connect with a community of enthusiasts</p>
                <p className="section-aboutus__text">MatchUp isn't just a tracking application: it's also a community of sports enthusiasts. Share experiences, exchange tips and find regular playing partners. Our platform fosters encounters and friendships around sport.</p>
            </section>
            {/*  */}
            <section className="section-question" id="section-question">
                <div className="section-question__left">
                    <p className="section-question-left_text">Got a question for us?</p>
                    <p className="section-question-left_text">Send us an email using our contact form!</p>
                </div>
                <div className="section-question__right">
                    <div className="global__flex-between-row">
                        <div className="section-question-right__input">
                            <p className="section-question-right-input__title">First Name</p>
                            <input className="section-question-right-input__input" type="text" />
                        </div>
                        <div className="section-question-right__space" />
                        <div className="section-question-right__input">
                            <p className="section-question-right-input__title">Last Name</p>
                            <input className="section-question-right-input__input" type="text" />
                        </div>
                    </div>
                    <div className="global__flex-between-row">
                        <div className="section-question-right__input">
                            <p className="section-question-right-input__title">Mail</p>
                            <input className="section-question-right-input__input" type="text" />
                        </div>
                        <div className="section-question-right__space" />
                        <div className="section-question-right__input">
                            <p className="section-question-right-input__title">Phone</p>
                            <input className="section-question-right-input__input" type="text" />
                        </div>
                    </div>
                    <div className="global__flex-between-row">
                        <div className="section-question-right_bottom__input">
                            <p className="section-question-right-input__title">Message</p>
                            <input className="section-question-right-input__input" type="text" />
                        </div>
                    </div>
                    <div className="section-aboutus-right__button">
                        <p className="section-aboutus-right-button__text">Send Message</p>
                    </div>
                </div>
            </section>
            {/*  */}
            <section className="section-footer" id="section-footer">
                <div className="section-footer__left">
                    <p className="section-footer-left__title">Need help with anything?</p>
                    <div className="section-footer-left__icons">
                        <img src={InstagramSVG} alt="MatchUp Logo" className="section-footer-left__icon" />
                        <img src={LinkedInSVG} alt="MatchUp Logo" className="section-footer-left__icon" />
                    </div>
                </div>
                <div className="section-footer__right">
                    <div className="section-footer-right__column">
                        <p className="section-footer-right-column__title">Home</p>
                        <p className="section-footer-right-column__text" title="Not available yet">Why we mater</p>
                        <p className="section-footer-right-column__text" title="Not available yet">How our system works</p>
                    </div>
                    <div className="section-footer-right__column">
                        <p className="section-footer-right-column__title">Company</p>
                        <p className="section-footer-right-column__text" title="Not available yet">About</p>
                        <p className="section-footer-right-column__text" title="Not available yet">Blog</p>
                    </div>
                    <div className="section-footer-right__column">
                        <p className="section-footer-right-column__title">Legal</p>
                        <p className="section-footer-right-column__text" title="Not available yet">Terms & Conditions</p>
                        <p className="section-footer-right-column__text" title="Not available yet">Privacy & Policy</p>
                        <p className="section-footer-right-column__text" title="Not available yet">Contact</p>
                    </div>
                    <div className="section-footer-right__column">
                        <p className="section-footer-right-column__title">Help</p>
                        <p className="section-footer-right-column__text" title="Not available yet">FAQs</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

/* <Link to="/login" className="login-button">
                    Login
                </Link> */