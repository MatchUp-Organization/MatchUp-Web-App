import { React, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import "./NewLogin.css"; // Import your CSS file here
import LoginImage from "../../assets/login-banner-img.png";
import SignupImage from "../../assets/signup-banner-img.png";
import { Link } from "react-router-dom";

export default function NewLogin() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        if (event.target.checked) {
            document.getElementById('login-side-panel').classList.remove('flex');
            document.getElementById('login-side-panel').classList.add('hidden');
            document.getElementById('signup-side-panel').classList.remove('hidden');
            document.getElementById('signup-side-panel').classList.add('flex');
        } else {
            document.getElementById('login-side-panel').classList.remove('hidden');
            document.getElementById('login-side-panel').classList.add('flex');
            document.getElementById('signup-side-panel').classList.remove('flex');
            document.getElementById('signup-side-panel').classList.add('hidden');
        }
    };
    return (
        <div id="login-page" className="flex flex-row h-screen">
            <div id="login-side-panel" className="flex flex-col w-1/2 h-full bg-blue-500">
                <img src={LoginImage} alt="login banner" className="mb-10" />
                <h2 className="text-4xl my-4">Welcome back!</h2>
                <p>Sign in to your account to continue</p>
            </div>
            <div id="signup-side-panel" className="hidden flex-col w-1/2 h-full bg-blue-500">
                <img src={SignupImage} alt="signup banner" className="mb-10" />
                <h2 className="text-4xl my-4">Matchup</h2>
                <p>Sign up to find your team.</p>
            </div>
            <div className="w-1/2 h-full">
                <div className="flex flex-col justify-center items-center h-screen">
                    <div className="col-12 text-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                            <input className="checkbox hidden" type="checkbox" id="reg-log" name="reg-log" checked={isChecked} onChange={handleCheckboxChange} />
                            <label htmlFor="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Log In</h4>
                                                <div className="form-group">
                                                    <div className="input-container">
                                                        <input type="email" name="logemail" className="form-style" placeholder="Your Email or Username" id="logemail" autoComplete="off" />
                                                        <FontAwesomeIcon icon={faAt} className="input-icon uil uil-at icon-small" /> {/* Adjust the font size */}
                                                    </div>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <div className="input-container">
                                                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                                                        <FontAwesomeIcon icon={faLock} className="input-icon uil uil-lock-alt icon-small" /> {/* Adjust the font size */}
                                                    </div>
                                                </div>
                                                <Link to="/loginBackup">
                                                    <button className="btn mt-3 bg-blue-500 text-white px-4 py-2 rounded">submit</button> {/* Adjusted margin */}
                                                </Link>
                                                <p className="mb-0 mt-2 text-center"><a href="#0" className="link">Forgot your password?</a></p> {/* Adjusted margin */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Sign Up</h4>
                                                <div className="form-group">
                                                    <div className="input-container">
                                                        <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                                                        <FontAwesomeIcon icon={faAt} className="input-icon uil uil-at icon-small" /> {/* Adjust the font size */}
                                                    </div>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <div className="input-container">
                                                        <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                                                        <FontAwesomeIcon icon={faAt} className="input-icon uil uil-at icon-small" /> {/* Adjust the font size */}
                                                    </div>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <div className="input-container">
                                                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                                                        <FontAwesomeIcon icon={faLock} className="input-icon uil uil-lock-alt icon-small" /> {/* Adjust the font size */}
                                                    </div>
                                                </div>
                                                <Link to="/loginBakcup">
                                                    <button className="btn mt-3 bg-blue-500 text-white px-4 py-2 rounded">submit</button> {/* Adjusted margin */}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
