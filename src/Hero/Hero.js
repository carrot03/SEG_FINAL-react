import React, { useState } from 'react';
import {Parallax} from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import Menu from '../Menu/Menu.js';
import NavBar from "../NavBar/NavBar.js";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './Hero.css';
import outside from '../images/outside.jpg'
import break1 from '../images/break1.jpg'
import HeroParallax from './HeroParallax.js';

function Hero() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [showNotification, setShowNotification] = useState(true);

  const handleNotificationClose = () => {
    setShowNotification(false);
  };

  return (
    <div>
      <HeroParallax/>
      <div className="container mt-5">
      <div className="row">
        {/* Left column - Paragraph */}
        <div className="col-md-6">
          <p>
            Bless Roll cafe, is the go-to place if you want to enjoy colourful and amazing desserts as well as drinks. 
            The owner is a mother and her daughter Zoe helps her and promotes the cafe.
            This place started very small and now we are one of the biggest cafes in South Korea.
            Please visit us, we will be more happy to meet and serve you.
          </p>
          <div style={{ marginTop: '5rem'}}>
          <img
            src={break1}
            alt="Blessroll"
            className="img-fluid"
          />
          </div>
          
        </div>

        {/* Right column - Image */}
        <div className="col-md-6">
          <img
            src={outside}
            alt="Blessroll"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
   </div>
      
  );
}

export default Hero;
