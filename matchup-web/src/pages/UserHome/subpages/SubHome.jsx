import React from 'react';
import './SubHome.css';
import RadarChart from './components/RadarChart';
import Overview from './components/SubHomeOverview';
import LocationLogo from "../../../assets/dashboard-home-location.svg";
import MainChartImage from "../../../assets/MainChart.png";

const SubHome = () => {

    // max 4 matches
    const upcomingMatches = [
        {
            date: 17,
            datemonth: 'Jun',
            title: 'Football match',
            location: 'Location of the pitch',
        },
        {
            date: 19,
            datemonth: 'Jun',
            title: 'Basketball game',
            location: 'Sports Hall A',
        },
        {
            date: 20,
            datemonth: 'Jul',
            title: 'Tennis match',
            location: 'Court 3',
        },
        {
            date: 23,
            datemonth: 'Dec',
            title: 'Tennis match',
            location: 'Court 3',
        }
    ];

    // max 10 i think
    const recentMatches = [
        {
            match: "FootBall",
            outcome: -1,
            players: 10
        },
        {
            match: "Football friends",
            outcome: 1,
            players: 8
        },
        {
            match: "Tennis",
            outcome: 1,
            players: 4
        },
        {
            match: "Tennis Rematch",
            outcome: 0,
            players: 2
        },
        {
            match: "Tennis Rematch",
            outcome: 1,
            players: 2
        },
        {
            match: "Tennis Rematch",
            outcome: -1,
            players: 2
        }
    ];

  return (
    <div className="subhome">
        <p className="subhome-title">User Dashboard</p>
        <div className='subhome-content-wrapper'>
            <div className="subhome-content">
                <Overview
                    title="Overview Summary"
                    group1={['24', 'Total matches played']}
                    group2={['69%', 'Win Rate']}
                    group3={['4.8/5', 'Average Rate']}
                />
                <div className='subhome-content-bottomcomp'>
                    <p className='subhome-content-bottomcomp_title'>Upcoming Matches</p>
                    <div  className='subhome-content-bottomcomp_content'>
                        {upcomingMatches.map((match, index) => (
                            <div key={index} className='subhome-content-bottomcomp-content_element'>
                                <div>
                                    <p className='subhome-content-bottomcomp-content-element_date'>{match.date.toString()}</p>
                                    <p className='subhome-content-bottomcomp-content-element_datemonth'>{match.datemonth}</p>
                                </div>
                                <div className='subhome-content-bottomcomp-content-element_infos'>
                                    <p className='subhome-content-bottomcomp-content-element-infos_title'>{match.title}</p>
                                    <div className='subhome-content-bottomcomp-content-element-infos_location'>
                                        <img src={LocationLogo} alt="Location Logo" className='subhome-content-bottomcomp-content-element-infos-location_logo' />
                                        <p className='subhome-content-bottomcomp-content-element-infos-location_text'>{match.location}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="subhome-content">
                <Overview
                    title="Recent Performance"
                    group1={['2', 'Total matches played']}
                    group2={['50%', 'Win Rate']}
                    group3={['4/5', 'Rate']}
                />
                <div className='subhome-content-bottomcomp'>
                    <p className='subhome-content-bottomcomp_title'>Previous Matches</p>
                    <div className='subhome-content-bottomcomp_header'>
                        <p className='subhome-content-bottomcomp-header_text subhome-content-bottomcomp-column1'>Match</p>
                        <p className='subhome-content-bottomcomp-header_text subhome-content-bottomcomp-column2'>Outcome</p>
                        <p className='subhome-content-bottomcomp-header_text subhome-content-bottomcomp-column3'>Players</p>
                    </div>
                    <div className='subhome-content-bottomcomp-table'>
                        {recentMatches.map((match, index) => (
                            <div className='subhome-content-bottomcomp_header'>
                                <p className='subhome-content-bottomcomp-table_text subhome-content-bottomcomp-column1'>{match.match}</p>
                                <p className={`subhome-content-bottomcomp-table_text subhome-content-bottomcomp-column2 ${match.outcome === 1 ? "subhome-content-bottomcomp-table_textgreen" : ""}`}>{match.outcome === 0 ? "Tie" : match.outcome === -1 ? "Loss" : "Win"}</p>
                                <p className='subhome-content-bottomcomp-table_text subhome-content-bottomcomp-column3'>{match.players.toString()}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="subhome-radarchart">
                <p className='subhome-radarchart_title'>Comparison and Insights</p>
                <div className='subhome-radarchart_image'>
                    <img src={MainChartImage} alt="" />
                </div>
                <div className='subhome-radarchart-ranking'>
                    <p className='subhome-radarchart-ranking_text'>Join the pro rank to unlock extra stats</p>
                    <div className='subhome-radarchart-ranking_button'>RANK UP</div>
                </div>
                {/* <RadarChart /> */}
            </div>
        </div>
    </div>
  );
};

export default SubHome;