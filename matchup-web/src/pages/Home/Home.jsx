import { Link } from "react-router-dom";
import { useState } from "react";
import Accordion from "../../components/Accordion";
import "./HomeTwo.css"; // Import your CSS file here
import MatchUpLogo from "../../assets/MatchUp-Logo.svg";
import PollImg from "../../assets/trust.png";
import BirdImg from "../../assets/heureux.png";

export default function Home() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="body-general">
            <div className="top-body-general">
                <header className="homeHeader">
                    <Link to="/login" className="login-button">
                        Login
                    </Link>
                </header>
                <div className="body-home">
                    <img src={MatchUpLogo} alt="MatchUp Logo" className="body-home-logo" />
                    <h1 className="body-home-title">MatchUp</h1>
                    <h1 className="body-home-title">Transform Today, Triumph Tomorrow</h1>
                    <div className="body-signIn">
                        <div className="inputBox">
                            <input
                                type="email"
                                id="signIn"
                                required
                                value={inputValue}
                                onChange={handleInputChange}
                            />
                            <span>Email...</span>
                        </div>
                        <button className="body-start-button">Start</button>
                    </div>
                </div>
            </div>
            <div className="body-infos">
                <div className="banner">
                    <img src={BirdImg} alt="Banner" className="banner-img" />
                    <div className="banner-text">
                        <h1 className="banner-title">
                            MatchUp is free
                            <br /> Try it right now.
                        </h1>
                        <h2 className="banner-about">LEARN MORE</h2>
                    </div>
                </div>
                <div className="body-infos-poll">
                    <div className="infos-text">
                        <h2 className="infos-title">Seamless Connectivity</h2>
                        <p className="infos-para">
                            Our platform bridges the gap between athletes and coaches.<br />
                            Creating a dynamic sports community where users can effortlessly<br /> Find and connect with each other for enriching sports experiences.
                        </p>
                    </div>
                    <img src={PollImg} alt="Poll" className="poll-img" />
                </div>
                <div className="separator"></div>
                <div className="body-infos-poll">
                    <div className="infos-text">
                        <h2 className="infos-title">Personalized Experience</h2>
                        <p className="infos-para">
                            Tailored to fit individual preferences, the platform offers a personalized journey.<br />
                            Allowing users to engage in specialized training, sports events and more...
                        </p>
                    </div>
                    <img src={PollImg} alt="Poll" className="poll-img" />
                </div>
                <div className="separator"></div>
                <div>
                    <Accordion />
                </div>
            </div>
        </div>
    )
}
