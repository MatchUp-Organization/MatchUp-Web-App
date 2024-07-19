import React, { useState } from 'react';
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
    const [selectedSport, setSelectedSport] = useState(null);

    const handleJoinUpClick = (sport) => {
      setSelectedSport(sport);
    };
  
    const handleBackClick = () => {
      setSelectedSport(null);
    };

    if (selectedSport) {
        return (
            <div className="sport-detail">
            <button className="back-button" onClick={handleBackClick}>← Back</button>
            <h2>{selectedSport}</h2>
            <p>Details and join options for {selectedSport}...</p>
            </div>
        );
    }

  return (
    <div className="AllSportsPage">
        {["Basketball", "Football", "Volleyball", "Tennis"].map((sport, index) => (
        <div key={index} className="section" style={{ backgroundImage: `url('./${sport.toLowerCase()}.png')` }}>
            <div className="sport-name">{sport}</div>
            <div className="section-content">
            <p>Players looking for a match: {Math.floor(Math.random() * 100)}</p>
            <p>Matches looking for players: {Math.floor(Math.random() * 50)}</p>
            <button className="join-up-button" onClick={() => handleJoinUpClick(sport)}>Join Up</button>
            </div>
        </div>
        ))}
    </div> 
    );
};

export default SubSports;