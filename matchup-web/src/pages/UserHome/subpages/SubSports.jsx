import React, { useState } from 'react';
import Modal from 'react-modal';
import './SubSports.css';
import MatchListItem from '../../../components/ui/MatchListItem/MatchListItem';

const sportsData = {
  Basketball: [
    { img_url: './basketball1.png', title: 'Rucker Park', location: 'New York City, USA', date: '2024-07-20', users: '10' },
    { img_url: './basketball2.png', title: 'Venice Beach Courts', location: 'Los Angeles, USA', date: '2024-07-21', users: '12' },
    { img_url: './basketball3.png', title: 'Maccabi Tel Aviv Arena', location: 'Tel Aviv, Israel', date: '2024-07-22', users: '8' },
    { img_url: './basketball4.png', title: 'Cairns Esplanade', location: 'Cairns, Australia', date: '2024-07-23', users: '15' },
    { img_url: './basketball5.png', title: 'Shanghai Outdoor Courts', location: 'Shanghai, China', date: '2024-07-24', users: '9' },
    { img_url: './basketball6.png', title: 'Hoop Dreams Tokyo', location: 'Tokyo, Japan', date: '2024-07-25', users: '11' },
    { img_url: './basketball7.png', title: 'Paris Duperré Court', location: 'Paris, France', date: '2024-07-26', users: '13' },
    { img_url: './basketball8.png', title: 'Berlin Mauerpark Courts', location: 'Berlin, Germany', date: '2024-07-27', users: '14' },
  ],
  Football: [
    { img_url: './football1.png', title: 'Camp Nou', location: 'Barcelona, Spain', date: '2024-07-20', users: '10/15' },
    { img_url: './football2.png', title: 'Old Trafford', location: 'Manchester, England', date: '2024-07-21', users: '18' },
    { img_url: './football3.png', title: 'Maracanã', location: 'Rio de Janeiro, Brazil', date: '2024-07-22', users: '20' },
    { img_url: './football4.png', title: 'San Siro', location: 'Milan, Italy', date: '2024-07-23', users: '22' },
    { img_url: './football5.png', title: 'Allianz Arena', location: 'Munich, Germany', date: '2024-07-24', users: '16' },
    { img_url: './football6.png', title: 'Estadio Azteca', location: 'Mexico City, Mexico', date: '2024-07-25', users: '14' },
    { img_url: './football7.jpeg', title: 'Santiago Bernabéu', location: 'Madrid, Spain', date: '2024-07-26', users: '19' },
    { img_url: './football8.jpeg', title: 'Signal Iduna Park', location: 'Dortmund, Germany', date: '2024-07-27', users: '21' },
  ],
  Volleyball: [
    { img_url: './volleyball1.png', title: 'Manhattan Beach', location: 'California, USA', date: '2024-07-20', users: '8' },
    { img_url: './volleyball2.png', title: 'Copacabana Beach', location: 'Rio de Janeiro, Brazil', date: '2024-07-21', users: '10' },
    { img_url: './volleyball3.png', title: 'Karon Beach', location: 'Phuket, Thailand', date: '2024-07-22', users: '6' },
    { img_url: './volleyball4.png', title: 'Bondi Beach', location: 'Sydney, Australia', date: '2024-07-23', users: '12' },
    { img_url: './volleyball5.png', title: 'Odaiba Beach', location: 'Tokyo, Japan', date: '2024-07-24', users: '9' },
    { img_url: './volleyball6.png', title: 'Scheveningen Beach', location: 'The Hague, Netherlands', date: '2024-07-25', users: '7' },
    { img_url: './volleyball7.png', title: 'South Beach', location: 'Miami, USA', date: '2024-07-26', users: '11' },
    { img_url: './volleyball8.png', title: 'Sentosa Island', location: 'Singapore', date: '2024-07-27', users: '13' },
  ],
  Tennis: [
    { img_url: './tennis1.png', title: 'Wimbledon', location: 'London, England', date: '2024-07-20', users: '4' },
    { img_url: './tennis2.png', title: 'Roland Garros', location: 'Paris, France', date: '2024-07-21', users: '6' },
    { img_url: './tennis3.png', title: 'Flushing Meadows', location: 'New York City, USA', date: '2024-07-22', users: '5' },
    { img_url: './tennis4.png', title: 'Rod Laver Arena', location: 'Melbourne, Australia', date: '2024-07-23', users: '7' },
    { img_url: './tennis5.png', title: 'Monte Carlo Country Club', location: 'Monte Carlo, Monaco', date: '2024-07-24', users: '3' },
    { img_url: './tennis6.png', title: 'Indian Wells Tennis Garden', location: 'California, USA', date: '2024-07-25', users: '8' },
    { img_url: './tennis7.png', title: 'Shanghai Masters', location: 'Shanghai, China', date: '2024-07-26', users: '4' },
    { img_url: './tennis8.png', title: 'Dubai Duty Free Tennis Stadium', location: 'Dubai, UAE', date: '2024-07-27', users: '6' },
  ],
};

const SubSports = ({ organizerId }) => {
  const [selectedSport, setSelectedSport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    location: '',
    date: '',
    sportType: '',
  });

  const handleJoinUpClick = (sport) => {
    setSelectedSport(sport);
  };

  const handleBackClick = () => {
    setSelectedSport(null);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/matches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          organizerId,
        }),
      });
      if (response.ok) {
        console.log('Match created successfully.');
        closeModal();
      } else if (response.status === 400) {
        console.error('Bad request. All fields are required.');
      } else {
        console.error('Internal server error.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (selectedSport) {
    return (
      <div className="sport-detail">
        <button className="AllSportsPage-back-button" onClick={handleBackClick}>← Back</button>
        <div className="AllSportsPage-sport-header">
          <h2>{selectedSport}</h2>
          <button className="AllSportsPage-sport-create-button" onClick={openModal}>
            Create a match
          </button>
        </div>
        <div className="matchlist-container">
          {sportsData[selectedSport].map((match, index) => (
            <MatchListItem
              key={index}
              img_url={match.img_url}
              title={match.title}
              location={match.location}
              date={match.date}
              users={match.users}
            />
          ))}
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Create Match"
          className="modal"
          overlayClassName="overlay"
        >
          <h2>Create a Match</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Location:
              <input type="text" name="location" value={formData.location} onChange={handleChange} required />
            </label>
            <label>
              Date:
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </label>
            <label>
              Sport Type:
              <select name="sportType" value={formData.sportType} onChange={handleChange} required>
                {["Basketball", "Football", "Volleyball", "Tennis"].map((sport) => (
                  <option key={sport} value={sport}>
                    {sport}
                  </option>
                ))}
              </select>
            </label>
            <div className="modal-buttons">
              <button type="submit" className="submit-button">Submit</button>
              <button type="button" className="close-button" onClick={closeModal}>Close</button>
            </div>
          </form>
        </Modal>
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
