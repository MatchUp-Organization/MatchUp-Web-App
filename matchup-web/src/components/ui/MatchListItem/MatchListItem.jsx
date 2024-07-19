import './MatchListItem.css';
import LocationPin from '../../../assets/location-pin.svg';
import UsersLogo from '../../../assets/users-logo.svg';

export default function MatchListItem({ img_url, title, location, date, users }) {
    return (
        <div className="matchlistitem-container">
            <div className="matchlistitem-header">
                <img src={img_url} alt="Field Image" className="matchlistitem-header_image" />
            </div>
            <div className="matchlistitem-content">
                <div className="matchlistitem-content-left">
                    <p className="matchlistitem-content-left_title">{title}</p>
                    <div className="matchlistitem-content-left_location">
                        <img src={LocationPin} alt="Location Pin" className="matchlistitem-content-left_location-image" />
                        <p className="matchlistitem-content-left_location-text">{location}</p>
                    </div>
                </div>
                <div className="matchlistitem-content-right">
                    <p className="matchlistitem-content-right_date">{date}</p>
                    <div className="matchlistitem-content-right_users">
                        <img src={UsersLogo} alt="Users Logo" className="matchlistitem-content-right_users-image" />
                        <p className="matchlistitem-content-right_users-text">{users}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}