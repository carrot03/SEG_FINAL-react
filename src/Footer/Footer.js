import React from 'react';
import logoFooter from '../images/logoFooter.png'
import { useTranslation } from 'react-i18next';
import './Footer.css'; // Custom CSS for footer styles

function Footer() {

  const { t } = useTranslation();

  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col text-left">
            <img
              className='footer-left'
              src={logoFooter}
              alt='Bless Roll'
            ></img>
          </div>
          <div className="col text-center">
            <p>&copy; {new Date().getFullYear()} Bless Roll. {t('footer-rights-reserved')}.</p>
            <p>Contact:  blessroll@naver.com</p>
          </div>
          <div className="col text-right" style={{padding: "0rem 0rem 0rem 10rem" }}>
            <p>{t('footer-openhours')}:</p>
            <p>{t('footer-all-week')} : {t('9am')}  {t('1am')}</p>
            <p>Location: South Korea, Daejeon, Yuseong-gu, Bongmyeong-dong, 668-2 1</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
