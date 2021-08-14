import React from 'react';
import profile from '../../images/profile.jpg';
import '../../'

export default function About() {
  return (
    <div className="about container-fluid d-flex">
      <div className="about-text">
        <h2 className="bio-heading text-center">A Bit About Me</h2>
        <div className="bio">
          <p>
            I live in North Minneapolis with my girlfriend and cat companion. We have a beautiful house in the Victory neighborhood near Robbinsdale. I'm a gamer who loves to camp and go on walks. I love animals, am really into birding, and have always enjoyed dabbling with computers and tech.
            I worked in retail for 13 years, the final three in management, primarily with stock and inventory control before deciding to move on. I made a natural transition to more warehouse work but in manufacturing instead and after a few years in that field, I decided it was time to make a change. Thus began my journey into the world of Coding.
          </p>
        </div>
      </div>
      <div className="profile">
        <img src={profile} alt="profile"></img>
      </div>
    </div>
  )
}