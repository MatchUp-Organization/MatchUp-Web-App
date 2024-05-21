import React from 'react';
import PageHeader from "../../../layouts/PageHeader/PageHeader";
import { useParams } from 'react-router-dom';
import './FieldInformation.css';

const pitchDetails = {
  1: {
    name: 'Pitch 1',
    image: '/pitch1.jpg',
    players: [
      { name: 'Player 1', image: '/player1.jpg' },
      { name: 'Player 2', image: '/player2.jpg' },
    ]
  },
  2: {
    name: 'Pitch 2',
    image: '/pitch2.jpg',
    players: [
      { name: 'Player 3', image: '/player3.jpg' },
      { name: 'Player 4', image: '/player4.jpg' },
    ]
  },
  3: {
    name: 'Pitch 3',
    image: '/Pitch3.jpg',
    players: [
      { name: 'Player 5', image: '/player5.jpg' },
      { name: 'Player 6', image: '/player6.jpg' },
      // Add more players as needed
    ]
  },
  // Add more pitch details as needed
};

export default function PitchDetails() {
  const { id } = useParams();
  const pitch = pitchDetails[id];

  if (!pitch) {
    return <div>Pitch not found</div>;
  }

  return (
    <>
    <PageHeader />
        <div className="pitch-details">
          <div className="pitch-image-container">
            <img src={pitch.image} alt={pitch.name} className="pitch-image" />
          </div>
          <div className="pitch-info">
            <h2>{pitch.name}</h2>
            <div className="players-list">
              {pitch.players.map((player, index) => (
                <div key={index} className="player-card">
                  <img src={player.image} alt={player.name} className="player-image" />
                  <p>{player.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </>
    );
}
