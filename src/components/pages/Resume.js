import React from 'react';
import resume from '../../images/resume.jpg';
import resume2 from '../../images/resume2.jpg';
import javascript from '../../images/javascript.png';
import html from '../../images/html.png';
import css from '../../images/css.png';
import mysql from '../../images/mysql.png';
import mongodb from '../../images/mongodb.png';
import express from '../../images/express.png';
import react from '../../images/react.png';
import nodejs from '../../images/nodejs.png';

export default function Resume() {
  return (
    <div className="resume container-fluid justify-content-around">
      <div className="d-flex flex-row text-center">
        <div className="resume-sheets">
          <a
            href="https://drive.google.com/file/d/1yI_f6qEparCPP23w5YY2s4BZDPwqf5xX/view?usp=sharing"
            target="_blank"
            rel="noreferrer">
            <img
              src={resume}
              alt="resume page one"
              className="resume-img">
            </img>
          </a>
          <a
            href="https://drive.google.com/file/d/1yI_f6qEparCPP23w5YY2s4BZDPwqf5xX/view?usp=sharing"
            target="_blank"
            rel="noreferrer">
            <img
              src={resume2}
              alt="resume page two"
              className="resume-img page-two">
            </img>
          </a>
        </div>
        <div className="d-flex flex-column skills align-items-center">
          <h3>Skills Acquired</h3>
          <img src={javascript} alt="javascript"></img>
          <img src={html} alt="html"></img>
          <img src={css} alt="css"></img>
          <img src={mysql} alt="mysql"></img>
          <img src={mongodb} alt="mongodb"></img>
          <img src={express} alt="express"></img>
          <img src={react} alt="react"></img>
          <img src={nodejs} alt="nodejs"></img>
        </div>
      </div>
    </div>
  )
}