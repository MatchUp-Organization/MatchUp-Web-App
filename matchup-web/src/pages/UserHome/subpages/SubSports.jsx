import React, { useState } from 'react';
import './SubSports.css';
import MatchListItem from '../../../components/ui/MatchListItem/MatchListItem';
import MaldivesTennisCourt from '../../../assets/maldives-tennis.jpg';
import StreetFootball from '../../../assets/street-football.png';
import EstadioDaLuz from '../../../assets/estadio-da-luz.png';
import StadiumDeToulouse from '../../../assets/stadium-de-toulouse.png';
import DefaultField from '../../../assets/default-field.png';
import StadeDeFrance from '../../../assets/stade-de-france.png';
import BritainField from '../../../assets/britain-field.png';

const SubSports = () => {
  const [selectedSport, setSelectedSport] = useState(null);

  const handleJoinUpClick = (sport) => {
    setSelectedSport(sport);
    handleSportClick(sport);
  };

  const handleBackClick = () => {
    setSelectedSport(null);
    setCurrentMatches(null);
  };

  const basketballMatches = [
    {
      img_url: "https://media.newyorker.com/photos/66759dc2003fd107cdf1b388/master/w_1920,c_limit/Sporting-Scene-Bronny-James.jpg",
      title: "Basketball match",
      location: "Location of the pitch",
      date: "22/08/2024",
      users: "7/10",
    },
    {
      img_url: "https://media.newyorker.com/photos/66759dc2003fd107cdf1b388/master/w_1920,c_limit/Sporting-Scene-Bronny-James.jpg",
      title: "Basketball game",
      location: "Sports Hall A",
      date: "23/08/2024",
      users: "5/10",
    },
    {
      img_url: "https://media.newyorker.com/photos/66759dc2003fd107cdf1b388/master/w_1920,c_limit/Sporting-Scene-Bronny-James.jpg",
      title: "bros balling",
      location: "the place",
      date: "24/08/2024",
      users: "8/10",
    },
    {
      img_url: "https://media.newyorker.com/photos/66759dc2003fd107cdf1b388/master/w_1920,c_limit/Sporting-Scene-Bronny-James.jpg",
      title: "Basketball match",
      location: "Location of the pitch",
      date: "23/08/2024",
      users: "7/10",
    },
    {
      img_url: "https://media.newyorker.com/photos/66759dc2003fd107cdf1b388/master/w_1920,c_limit/Sporting-Scene-Bronny-James.jpg",
      title: "company time",
      location: "bruv land",
      date: "19/08/2024",
      users: "4/10",
    },
    {
      img_url: "https://media.newyorker.com/photos/66759dc2003fd107cdf1b388/master/w_1920,c_limit/Sporting-Scene-Bronny-James.jpg",
      title: "Basketball game",
      location: "Main Arena",
      date: "29/08/2024",
      users: "9/12",
    },
    {
      img_url: "https://media.newyorker.com/photos/66759dc2003fd107cdf1b388/master/w_1920,c_limit/Sporting-Scene-Bronny-James.jpg",
      title: "Basketball game",
      location: "Community Gym",
      date: "01/09/2024",
      users: "8/10",
    },
    {
      img_url: "https://media.newyorker.com/photos/66759dc2003fd107cdf1b388/master/w_1920,c_limit/Sporting-Scene-Bronny-James.jpg",
      title: "Basketball game",
      location: "High School Court",
      date: "05/09/2024",
      users: "6/10",
    },
    {
      img_url: "https://media.newyorker.com/photos/66759dc2003fd107cdf1b388/master/w_1920,c_limit/Sporting-Scene-Bronny-James.jpg",
      title: "Basketball game",
      location: "College Stadium",
      date: "12/09/2024",
      users: "10/15",
    },
    {
      img_url: "https://media.newyorker.com/photos/66759dc2003fd107cdf1b388/master/w_1920,c_limit/Sporting-Scene-Bronny-James.jpg",
      title: "Basketball game",
      location: "Downtown Sports Center",
      date: "18/09/2024",
      users: "4/10",
    },
    {
      img_url: "https://media.newyorker.com/photos/66759dc2003fd107cdf1b388/master/w_1920,c_limit/Sporting-Scene-Bronny-James.jpg",
      title: "Basketball game",
      location: "Westside Gym",
      date: "22/09/2024",
      users: "5/10",
    },
    {
      img_url: "https://media.newyorker.com/photos/66759dc2003fd107cdf1b388/master/w_1920,c_limit/Sporting-Scene-Bronny-James.jpg",
      title: "Basketball game",
      location: "East End Court",
      date: "27/09/2024",
      users: "6/12",
    },
    {
      img_url: "https://media.newyorker.com/photos/66759dc2003fd107cdf1b388/master/w_1920,c_limit/Sporting-Scene-Bronny-James.jpg",
      title: "Basketball game",
      location: "Uptown Arena",
      date: "30/09/2024",
      users: "7/10",
    },
    {
      img_url: "https://media.newyorker.com/photos/66759dc2003fd107cdf1b388/master/w_1920,c_limit/Sporting-Scene-Bronny-James.jpg",
      title: "Basketball game",
      location: "Northside Gym",
      date: "03/10/2024",
      users: "9/10",
    }
  ];

  const footballMatches = [
    {
      img_url: BritainField,
      title: "Great match of football",
      location: "somewhere in britain",
      date: "Not set",
      users: "7/10",
    },
    {
      img_url: StreetFootball,
      title: "Street football",
      location: "Location of the pitch",
      date: "23/07/2024",
      users: "5/10",
    },
    {
      img_url: StadeDeFrance,
      title: "Euros rematch",
      location: "Stade de France",
      date: "24/07/2024",
      users: "20/22",
    },
    {
      img_url: EstadioDaLuz,
      title: "Benfica time",
      location: "Estádio da Luz",
      date: "10/08/2024",
      users: "16/22",
    },
    {
      img_url: StadiumDeToulouse,
      title: "Stadium de Toulouse",
      location: "Stadium de Toulouse",
      date: "15/08/2024",
      users: "15/22",
    },
    {
      img_url: DefaultField,
      title: "Football match",
      location: "Location of the pitch",
      date: "22/08/2024",
      users: "18/22",
    },
  ];

  const volleyballMatches = [
    {
      img_url: "https://thecapecurrent.com/wp-content/uploads/2023/07/play-volley-1024x768.jpg",
      title: "Volleyball match",
      location: "Location of the pitch",
      date: "23/08/2024",
      users: "7/12",
    },
    {
      img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Algeria_and_Japan_women%27s_national_volleyball_team_at_the_2012_Summer_Olympics_%287913959028%29.jpg/1280px-Algeria_and_Japan_women%27s_national_volleyball_team_at_the_2012_Summer_Olympics_%287913959028%29.jpg",
      title: "company time",
      location: "Somewhere in London",
      date: "19/08/2024",
      users: "4/12",
    },
  ];

  const tennisMatches = [
    {
      img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/2013_Australian_Open_-_Guillaume_Rufin.jpg/800px-2013_Australian_Open_-_Guillaume_Rufin.jpg",
      title: "Tennis game",
      location: "Sports Hall A",
      date: "23/08/2024",
      users: "2/4",
    },
    {
      img_url: "https://media.architecturaldigest.com/photos/62f1656d02cf54311bd70b54/master/w_2580%2Cc_limit/GettyImages-876716576.jpg",
      title: "bros balling",
      location: "San Paolo Converso",
      date: "24/08/2024",
      users: "1/2",
    },
    {
      img_url: "https://media.architecturaldigest.com/photos/64ecc5cf05a95351482e1608/master/w_2580%2Cc_limit/GettyImages-162576503.jpg",
      title: "Tennis match",
      location: "Mürren, Switzerland",
      date: "23/08/2024",
      users: "1/2",
    },
    {
      img_url: MaldivesTennisCourt,
      title: "Ye we hot",
      location: "Jumeirah Maldives",
      date: "19/08/2024",
      users: "3/4",
    },
  ];

  const [currentMatches, setCurrentMatches] = useState(basketballMatches);

  const handleSportClick = (sport) => {
    switch (sport) {
      case "Basketball":
        setCurrentMatches(basketballMatches);
        break;
      case "Football":
        setCurrentMatches(footballMatches);
        break;
      case "Volleyball":
        setCurrentMatches(volleyballMatches);
        break;
      case "Tennis":
        setCurrentMatches(tennisMatches);
        break;
      default:
        setCurrentMatches([]);
    }
  };

  if (selectedSport) {
    return (
      <div className="AllSportsPage-sport-page">
        <button className="AllSportsPage-back-button" onClick={handleBackClick}>← Back</button>
        <div className="AllSportsPage-sport-header">
          <h2>{selectedSport}</h2>
          <button className="AllSportsPage-sport-create-button">Create a match</button>
        </div>
        <div className="AllSportsPage-sport-matches">
          {currentMatches.map((match, index) => (
            <MatchListItem key={index} {...match} />
          ))}
        </div>
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