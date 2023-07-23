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
        <div className="text col-md-6 text-center">
          <p>{t('hero-first-text')}</p>
          <p>{t('hero-main-text')}</p>
          <p>{t('hero-second-text')} </p>
          <p>{t('hero-third-text')}</p>
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
