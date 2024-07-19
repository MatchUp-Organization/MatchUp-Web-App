import React from 'react';
import "./SubHomeOverview.css"

const Overview = ({ className, title, group1, group2, group3 }) => {
  return (
    <div className="overview">
        <p className='overview-title'>{title}</p>
        <div className='overview-body'>
            <div className='overview-body-group'>
                <p className='overview-body-group-text-blue'>{group1[0]}</p>
                <p className='overview-body-group-text'>{group1[1]}</p>
            </div>
            <div className='overview-stick'/>
            <div className='overview-body-group'>
                <p className='overview-body-group-text-blue'>{group2[0]}</p>
                <p className='overview-body-group-text'>{group2[1]}</p>
            </div>
            <div className='overview-stick'/>
            <div className='overview-body-group'>
                <p className='overview-body-group-text-blue'>{group3[0]}</p>
                <p className='overview-body-group-text'>{group3[1]}</p>
            </div>
        </div>
    </div>
  );
};

export default Overview;
