import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "./UserHome.css"; // Import your CSS file here
import PageHeader from "../../layouts/PageHeader";

export default function UserHome() {
    return (
        <>
            <PageHeader />
            <div className="home-container">
                <header>
                    <h1>Welcome to MatchUp</h1>
                    <p>Connecting sports enthusiasts worldwide!</p>
                </header>
                <section className="intro-section">
                    <h2>What is MatchUp?</h2>
                    <p>MatchUp is a platform designed to bring together people from around the world to play sports together or against each other. Whether you're into football, basketball, tennis, or any other sport, MatchUp has something for everyone.</p>
                    <p>Similar to the Celebreak app by Adidas, MatchUp aims to foster a global community of sports lovers and provide them with the opportunity to connect, compete, and have fun.</p>
                </section>
                <section className="features-section">
                    <h2>Key Features</h2>
                    <div className="feature">
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        <p>Play with or against people from diverse backgrounds and skill levels.</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        <p>Find matches and players for multiple sports.</p>
                    </div>
                    <div className="feature">
                        <FontAwesomeIcon icon={faCheck} className="icon" />
                        <p>Easy-to-use interface for seamless matchmaking and game scheduling.</p>
                    </div>
                </section>
                <footer>
                    <p>&copy; 2024 MatchUp. All rights reserved.</p>
                </footer>
            </div>
        </>
    )
}