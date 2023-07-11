import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import './NavBar.css';

function NavBar() {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" variant="dark" fluid>
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">{t('NavBar-about')}</Nav.Link>
            <Nav.Link href="#menu">{t('NavBar-menu')}</Nav.Link>
            <Nav.Link href="#vlogs">{t('NavBar-vlogs')}</Nav.Link>
            <Nav.Link href="#contactus">{t('NavBar-contactus')}</Nav.Link>
            <Nav.Link href="#virtualtable">{t('NavBar-virtualtable')}</Nav.Link>
            <Nav.Link href="#reviews">{t('NavBar-reviews')}</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Language" id="basic-nav-dropdown">
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
