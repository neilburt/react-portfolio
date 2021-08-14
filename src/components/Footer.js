import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import github from '../../src/images/github.png';
import linkedin from '../../src/images/linkedin.png';
import stackoverflow from '../../src/images/stackoverflow.png';

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
          <a href="https://stackoverflow.com/users/15825086/neil-burt" target="_blank" rel="noreferrer">
            <img className="footer-img stackoverflow" alt="contact" src={stackoverflow}></img>
          </a>
        </div>
      </div>
    </div>
  )
}