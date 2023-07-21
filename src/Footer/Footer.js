import React from 'react';
import './Footer.css'; // Custom CSS for footer styles

function Footer() {
  return (
    <footer className="footer bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
            <p>Contact: contact@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
