import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from "../../../layouts/PageHeader/PageHeader";
import './FieldSelection.css';

const pitches = [
  { id: 1, name: 'Pitch 1', image: '/pitch1.jpg', players: 10 },
  { id: 2, name: 'Pitch 2', image: '/pitch2.jpg', players: 15 },
  { id: 3, name: 'Pitch 3', image: '/Pitch3.jpg', players: 8 },
  // Add more pitches as needed
];

export default function PitchesList() {
  return (
    <>
      <PageHeader />
      <div className="pitches-list-wrapper">
        <div className="pitches-list">
          {pitches.map(pitch => (
            <div key={pitch.id} className="pitch-card">
              <Link to={`/football/pitch/${pitch.id}`}>
                <img src={pitch.image} alt={pitch.name} className="pitch-image" />
              </Link>
              <h3>{pitch.name}</h3>
              <p>Players: {pitch.players}/22</p>
            </div>
          ))}
        </div>
        <div className="pick-text">
          <p>Pick where you want to play</p>
        </div>
      </div>
    </>
  );
}
