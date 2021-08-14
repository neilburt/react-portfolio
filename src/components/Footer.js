import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import github from '../../src/images/github.png';
import linkedin from '../../src/images/linkedin.png';
import facebook from '../../src/images/facebook.png';

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row text-center">
        <div className="col">
          <a href="https://github.com/neilburt" target="_blank" rel="noreferrer">
            <img className="footer-img github" alt="contact" src={github}></img>
          </a>
          <a href="https://www.linkedin.com/in/neil-burt/" target="_blank" rel="noreferrer">
            <img className="footer-img linkedin" alt="contact" src={linkedin}></img>
          </a>
          <a href="https://www.facebook.com/neil.c.burt" target="_blank" rel="noreferrer">
            <img className="footer-img facebook" alt="contact" src={facebook}></img>
          </a>
        </div>
      </div>
    </div>
  )
}