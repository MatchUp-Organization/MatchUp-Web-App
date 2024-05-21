import "./UserHome.css"; // Import your CSS file here
import PageHeader from "../../layouts/PageHeader";
import SolutionImage from "./solution_image.jpg";
import MatchUpLogo from "./MatchUp-Logo-Simple.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

export default function UserHome() {
  return (
    <div className="user-home">
      <PageHeader />
      <section id="home">
        <img src={MatchUpLogo} alt="MatchUp Logo" className="home-img" />
        <h1 className="home-title">MatchUp</h1>
        <h2 className="home-subtitle">Transform Today, Triumph Tomorrow</h2>
        <div className="home-background"></div>
      </section>

      <section id="solution">
        <div className="solution-div">
          <img className="solution-image" src={SolutionImage} alt="people playing basketball" />
          <div className="solution-textdiv">
            <h1 className="solution-textdiv-title">Our Solution</h1>
            <div className="solution-textdiv-div">
              <img className="solution-textdiv-div-img" src={MatchUpLogo} alt="MatchUp logo" />
              <h2 className="solution-textdiv-div-subtitle">Match Up with athletes and coaches!</h2>
            </div>
            <p className="solution-textdiv-content">Our platform revolutionizes the connection between athletes and
              coaches, offering an immersive experience in the realm of sports. Users gain access to a diverse
              array of sports events, specialized training sessions, and opportunities for friendly encounters,
              fostering a dynamic community for enthusiasts at all skill levels.</p>
            <p className="solution-textdiv-content">Emphasizing user-friendliness, security, and customization, our
              platform integrates intuitive features and robust security measures. This ensures users can explore,
              connect, and engage in rewarding sports experiences with confidence.</p>
          </div>
        </div>
      </section>

      <section id="team">
        <h1 className="team-h1">Our Team !</h1>
        <div className="matchup-profiles">
          <div className="matchup-profile">
            <img src="https://avatars.githubusercontent.com/u/71759645?v=4" alt="Github ppf" />
            <div className="name-role">
              <h3>Alex-anderson Mysengsay</h3>
              <p>Mobile Frontend Developer</p>
            </div>
          </div>
          <div className="matchup-profile">
            <img src="https://avatars.githubusercontent.com/u/72015739?v=4" alt="Github ppf" />
            <div className="name-role">
              <h3>Julien Deviller</h3>
              <p>Mobile Frontend Developer</p>
            </div>
          </div>
          <div className="matchup-profile">
            <img src="https://avatars.githubusercontent.com/u/74191254?v=4" alt="Github ppf" />
            <div className="name-role">
              <h3>Mohamad Ghalab</h3>
              <p>Backend Developer</p>
            </div>
          </div>
          <div className="matchup-profile">
            <img src="https://avatars.githubusercontent.com/u/42243802?v=4" alt="Github ppf" />
            <div className="name-role">
              <h3>Romain Llosa</h3>
              <p>Backend Developer</p>
            </div>
          </div>
          <div className="matchup-profile">
            <img src="https://avatars.githubusercontent.com/u/72015260?v=4" alt="Github ppf" />
            <div className="name-role">
              <h3>Todor Zugic</h3>
              <p>Backend Developer</p>
            </div>
          </div>
          <div className="matchup-profile">
            <img src="https://avatars.githubusercontent.com/u/71928032?v=4" alt="Github ppf" />
            <div className="name-role">
              <h3>Tiago Martins</h3>
              <p>Devops and Fullstack Developer</p>
            </div>
          </div>
          <div className="matchup-profile">
            <img src="https://avatars.githubusercontent.com/u/43636233?v=4" alt="Github ppf" />
            <div className="name-role">
              <h3>Vitor Hugo Moreira Reis</h3>
              <p>Web Frontend Developer</p>
            </div>
          </div>
          <div className="matchup-profile">
            <img src="https://avatars.githubusercontent.com/u/76882493?v=4" alt="Github ppf" />
            <div className="name-role">
              <h3>Josue Houssou</h3>
              <p>Web Frontend Developer</p>
            </div>
          </div>
        </div>
        <div className="team-background"></div>
      </section>

      <section id="contact">
        <footer className="contact-footer">
          <h2>Contact Us</h2>
          <div className="contact-container">
            <div className="regular-contact">
              <p>Email: matchup_2025@labeip.epitech.eu</p>
              <p>Phone: <i>To be determined</i> </p>
            </div>
            <div className="contact-divider"></div>
            <div className="socials-contact">
              <a href="https://x.com/MatchUp2025" className="twitter">
                <FontAwesomeIcon icon={faTwitter} />
                X (Twitter)
              </a>
              <a href="https://www.instagram.com/matchup_2025/" className="instagram">
                <FontAwesomeIcon icon={faInstagram} />
                Instagram
              </a>
              <a href="https://www.facebook.com/MatchUp-100899002327000" className="facebook">
                <FontAwesomeIcon icon={faFacebook} />
                Facebook
              </a>
            </div>
          </div>
          <div className="logo-n-legal">
            <img src="MatchUp-Logo-Simple.PNG" alt="MatchUp Logo" />
            <span>Copyright © 2024-2025 MatchUp</span>
          </div>
        </footer>
      </section>
    </div>
  )
}