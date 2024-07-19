import './MatchListItem.css';

export default function MatchListItem() {
    return (
        <div className="matchlistitem-container">
            <div className="matchlistitem-header">
                <img src="https://via.placeholder.com/500" alt="Field Image" className="matchlistitem-header_image" />
            </div>
            <div className="matchlistitem-content">
                <div className="matchlistitem-content-left">
                    <p className="matchlistitem-content-left_title">Match Title</p>
                    <p className="matchlistitem-content-left_description">Match Location</p>
                </div>
                <div className="matchlistitem-content-right">
                    <p className="matchlistitem-content-right_title">Match Date</p>
                    <p className="matchlistitem-content-right_description">Player Count</p>
                </div>
            </div>
        </div>
    );
}