import React from 'react';
import MatchUpLogo from "../../../assets/MatchUp-Logo.svg";
import HomeLogo from "../../../assets/dashboard-home.svg";
import CalendarLogo from "../../../assets/dashboard-calendar.svg";
import SportsLogo from "../../../assets/dashboard-sports.svg";
import SettingsLogo from "../../../assets/dashboard-settings.svg";
import NoProfilePictureLogo from "../../../assets/dashboard-noprofilepicture.svg";
import SearchLogo from "../../../assets/dashboard-search.svg";
import './SubSports.css';
import MatchListItem from '../../../components/ui/MatchListItem/MatchListItem';

const SubSports = () => {
  return (
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
  );
};

export default SubSports;