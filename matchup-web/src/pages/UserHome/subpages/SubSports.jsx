import React from 'react';
import './SubSports.css';
import MatchListItem from '../../../components/ui/MatchListItem/MatchListItem';

const SubSports = () => {
  return (
    <div className="full-height-width">
      Sports
      <MatchListItem
        img_url="https://via.placeholder.com/500"
        title="Football Match"
        location="Football Field"
        date="19/07/2024"
        users="18/22"
      />
    </div>
  );
};

export default SubSports;