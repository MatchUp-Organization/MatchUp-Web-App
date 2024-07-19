import React from 'react';
import './AllSportsPage.css'; // Import the CSS file
import MatchUpLogo from "../../../assets/MatchUp-Logo.svg";
import HomeLogo from "../../../assets/dashboard-home.svg";
import CalendarLogo from "../../../assets/dashboard-calendar.svg";
import SportsLogo from "../../../assets/dashboard-sports.svg";
import SettingsLogo from "../../../assets/dashboard-settings.svg";
import NoProfilePictureLogo from "../../../assets/dashboard-noprofilepicture.svg";
import SearchLogo from "../../../assets/dashboard-search.svg";

function AllSportsPage() {
    return (
        <div className="dashboard">
            <section className="dashboard-leftside">
                <div className="dashboard-leftside_top">
                    <img src={MatchUpLogo} alt="MatchUp Logo" className="dashboard-leftside-top_image" />
                    <p className="dashboard-leftside-top_title">MatchUp</p>
                </div>
                <div className="dashboard-leftside_content">
                    <div className="dashboard-leftside-content_navbutton">
                        <img src={HomeLogo} alt="Home Logo" className="dashboard-leftside-content-navbutton_image" />
                        <p className="dashboard-leftside-content-navbutton_text">Home</p>
                    </div>
                    <div className="dashboard-leftside-content_navbutton">
                        <img src={CalendarLogo} alt="Calendar Logo" className="dashboard-leftside-content-navbutton_image" />
                        <p className="dashboard-leftside-content-navbutton_text">Calendar</p>
                    </div>
                    <div className="dashboard-leftside-content_navbutton">
                        <img src={SportsLogo} alt="Sports Logo" className="dashboard-leftside-content-navbutton_image" />
                        <p className="dashboard-leftside-content-navbutton_text">Sports</p>
                    </div>
                </div>
                <div className="dashboard-leftside_bottom">
                    <img src={SettingsLogo} alt="Settings Logo" className="dashboard-leftside-bottom_image" />
                    <p className="dashboard-leftside-bottom_text">Settings</p>
                </div>
            </section>
            <section className="dashboard-rightside">
                <header className="dashboard-rightside_header">
                    <div className="dashboard-rightside-header_input">
                        <img src={SearchLogo} alt="Search Logo" className="dashboard-rightside-header-input_logo" />
                        <input className="dashboard-rightside-header-input_input" type="text" placeholder="Search" />
                    </div>
                    <img src={NoProfilePictureLogo} alt="Profile Logo" className="dashboard-rightside-header_picture" />
                </header>
                <div className="AllSportsPage">
                    <div className="section" style={{ backgroundImage: `url('./basketball.png')` }}>
                        <div className="sport-name">Basketball</div>
                        <div className="section-content">
                            <p>Players looking for a match: {Math.floor(Math.random() * 100)}</p>
                            <p>Matches looking for players: {Math.floor(Math.random() * 50)}</p>
                            <button className="join-up-button">Join Up</button>
                        </div>
                    </div>
                    <div className="section" style={{ backgroundImage: `url('./football.png')` }}>
                        <div className="sport-name">Football</div>
                        <div className="section-content">
                            <p>Players looking for a match: {Math.floor(Math.random() * 100)}</p>
                            <p>Matches looking for players: {Math.floor(Math.random() * 50)}</p>
                            <button className="join-up-button">Join Up</button>
                        </div>
                    </div>
                    <div className="section" style={{ backgroundImage: `url('./volleyball.png')` }}>
                        <div className="sport-name">Volleyball</div>
                        <div className="section-content">
                            <p>Players looking for a match: {Math.floor(Math.random() * 100)}</p>
                            <p>Matches looking for players: {Math.floor(Math.random() * 50)}</p>
                            <button className="join-up-button">Join Up</button>
                        </div>
                    </div>
                    <div className="section" style={{ backgroundImage: `url('./tennis.png')` }}>
                        <div className="sport-name">Tennis</div>
                        <div className="section-content">
                            <p>Players looking for a match: {Math.floor(Math.random() * 100)}</p>
                            <p>Matches looking for players: {Math.floor(Math.random() * 50)}</p>
                            <button className="join-up-button">Join Up</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AllSportsPage;
