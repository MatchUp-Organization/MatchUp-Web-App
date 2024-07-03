import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import HowItWorks from './components/HowItWorks/HowItWorks';
import AboutUs from './components/About/About';
import ContactForm from './components/Contact/Contact';
import JoinUsToday from './components/JoinUs/JoinUs';
import Footer from './components/Footer/Footer';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <HowItWorks />
      <JoinUsToday />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
