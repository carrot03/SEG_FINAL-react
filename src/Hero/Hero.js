import React, { useState } from 'react';
import {Parallax} from 'react-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import Menu from '../Menu/Menu.js';
import NavBar from "../NavBar/NavBar.js";
import './Hero.css';

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
   
        <div
          id='Hero'
          className="iframe-container"
          style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '56.2225%',
            paddingBottom: 0,
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            willChange: 'transform',
            
          }}
        >
          <iframe
            title="Embedded Design"
            loading="lazy"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              border: 'none',
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAFn9ujCHeA/view?embed"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
          <a
            href="https://www.canva.com/design/DAFn9ujCHeA/view?utm_content=DAFn9ujCHeA&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Design
          </a>
        </div>
      
  );
}

export default Hero;
