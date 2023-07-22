import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../images/logo.png';
import './NavBar.css';

function NavBar() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar expand="lg" bg="light" fixed='top'>
      <Container fluid>
        <Navbar.Brand>
          <img
            className='nav-logo'
            src={logo}
            alt="Bless Roll"
          ></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end'>
        
          <Nav className="me-auto">
              <Link to="/about" className="nav-link">{t('NavBar-about')}</Link>
              <Link to="/menu" className="nav-link">{t('NavBar-menu')}</Link>
              <Link to="/contactus" className="nav-link">{t('NavBar-contactus')}</Link>
              <Link to="/reviews" className="nav-link">{t('NavBar-reviews')}</Link>
          </Nav>
          
          <Nav className="me-auto">
            <NavDropdown className='drop-down-lang' title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => changeLanguage('en')}>English</NavDropdown.Item>
              <NavDropdown.Item onClick={() => changeLanguage('fr')}>Français</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;