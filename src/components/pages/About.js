import React from 'react';
import profile from '../../images/profile.jpg';

export default function About() {
  return (
    <div className="about container-fluid d-flex flex-column justify-content-center">
      <div className="about-text">
        <h2 className="bio-heading text-center">A Bit About Me</h2>
        <div className="bio">
          <p>
          I am a junior software engineer leveraging leadership, organizational, and time-management skills gained over more than 15 years of experience in warehouse, inventory, and team management. I am highly experienced in meeting goals and deadlines individually and as part of a team. I have been commended by supervisors for my ability to adapt to ever-changing work environments and go above and beyond to meet daily, as well as extraordinary, demands. I have been recognized for resourcefulness, flexibility, problem-solving skills, high attention to detail, and my ability to accomplish tasks with minimal instruction and supervision.
          </p>
          <p>
          I have recently completed the rigorous web development certificate program through the University of Minnesota and am very eager to maintain this momentum into the field, contributing work ethic, loyalty, and extensive experience in collaboration and customer satisfaction to the success of a business.
          </p>
          <p>
          I live in North Minneapolis with my partner and our cat companion. We have a beautiful house in the Victory neighborhood near Robbinsdale. I'm a gamer who loves to camp and go on walks. I love animals, am really into birding, and have always enjoyed dabbling with computers and tech.
          </p>
        </div>
      </div>
      <div className="profile text-center">
        <img className="profile-pic" src={profile} alt="profile"></img>
      </div>
    </div>
  )
}