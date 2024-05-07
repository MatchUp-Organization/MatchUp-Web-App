import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLock } from "@fortawesome/free-solid-svg-icons";
import "./NewLogin.css"; // Import your CSS file here

export default function NewLogin() {
    return (
        <div className="container mx-auto">
            <div className="section">
                <div className="container">
                    <div className="flex flex-col justify-center items-center h-screen">
                        <div className="col-12 text-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input className="checkbox hidden" type="checkbox" id="reg-log" name="reg-log" />
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
                                                            <FontAwesomeIcon icon={faAt} className="input-icon uil uil-at icon-small" style={{ fontSize: "0.8em" }} /> {/* Adjust the font size */}
                                                        </div>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <div className="input-container">
                                                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                                                            <FontAwesomeIcon icon={faLock} className="input-icon uil uil-lock-alt icon-small" style={{ fontSize: "0.8em" }} /> {/* Adjust the font size */}
                                                        </div>
                                                    </div>
                                                    <button className="btn mt-3 bg-blue-500 text-white px-4 py-2 rounded">submit</button> {/* Adjusted margin */}
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
                                                            <FontAwesomeIcon icon={faAt} className="input-icon uil uil-at icon-small" style={{ fontSize: "0.8em" }} /> {/* Adjust the font size */}
                                                        </div>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <div className="input-container">
                                                            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                                                            <FontAwesomeIcon icon={faAt} className="input-icon uil uil-at icon-small" style={{ fontSize: "0.8em" }} /> {/* Adjust the font size */}
                                                        </div>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <div className="input-container">
                                                            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                                                            <FontAwesomeIcon icon={faLock} className="input-icon uil uil-lock-alt icon-small" style={{ fontSize: "0.8em" }} /> {/* Adjust the font size */}
                                                        </div>
                                                    </div>
                                                    <button className="btn mt-3 bg-blue-500 text-white px-4 py-2 rounded">submit</button> {/* Adjusted margin */}
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
        </div>
    )
}
