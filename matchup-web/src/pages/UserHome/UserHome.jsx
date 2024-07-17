import "./UserHome.css"; // Import your CSS file here
import PageHeader from "../../layouts/PageHeader";
import SolutionImage from "./solution_image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import MatchUpLogo from "../../assets/MatchUp-Logo.svg";
import HomeLogo from "../../assets/dashboard-home.svg";
import CalendarLogo from "../../assets/dashboard-calendar.svg";
import SportsLogo from "../../assets/dashboard-sports.svg";
import SettingsLogo from "../../assets/dashboard-settings.svg";
import ProfileLogo from "../../assets/dashboard-profile.svg";
import NoProfilePictureLogo from "../../assets/dashboard-noprofilepicture.svg";
import SearchLogo from "../../assets/dashboard-search.svg";

export default function UserHome() {
  return (
    <div className="dashboard">
      <section className="dashboard-leftside">
        <div className="dashboard-leftside_top">
          <img src={MatchUpLogo} alt="MatchUp Logo" className="dashboard-leftside-top_image" />
          <p className="dashboard-leftside-top_title">MatchUp</p>
        </div>
        <div className="dashboard-leftside_content">
          <div className="dashboard-leftside-content_navbutton">
            <img src={HomeLogo} alt="MatchUp Logo" className="dashboard-leftside-content-navbutton_image" />
            <p className="dashboard-leftside-content-navbutton_text">Home</p>
          </div>
          <div className="dashboard-leftside-content_navbutton">
            <img src={CalendarLogo} alt="MatchUp Logo" className="dashboard-leftside-content-navbutton_image" />
            <p className="dashboard-leftside-content-navbutton_text">Calendar</p>
          </div>
          <div className="dashboard-leftside-content_navbutton">
            <img src={SportsLogo} alt="MatchUp Logo" className="dashboard-leftside-content-navbutton_image" />
            <p className="dashboard-leftside-content-navbutton_text">Sports</p>
          </div>
        </div>
        <div className="dashboard-leftside_bottom">
          <img src={SettingsLogo} alt="MatchUp Logo" className="dashboard-leftside-bottom_image" />
          <p className="dashboard-leftside-bottom_text">Settings</p>
        </div>
      </section>
      <section className="dashboard-rightside">
        <header className="dashboard-rightside_header">
          <div className="dashboard-rightside-header_input">
            <img src={SearchLogo} alt="MatchUp Logo" className="dashboard-rightside-header-input_logo" />
            <input className="dashboard-rightside-header-input_input" type="text" placeholder="Search" />
          </div>
          <img src={NoProfilePictureLogo} alt="MatchUp Logo" className="dashboard-rightside-header_picture" />
          <img src={ProfileLogo} alt="MatchUp Logo" className="dashboard-rightside-header_button" />
        </header>
      </section>
    </div>
  )
}
/* <PageHeader /> */