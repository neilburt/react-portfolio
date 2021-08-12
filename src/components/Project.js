import React from 'react';

export default function Project() {
  return (
    <div className="card">
      <img className="card-img-top center" src="./images/event-organizer.jpg" alt="project card screenshot" />
      <div className="card-body">
        <h4 className="card-title">Event Organizer</h4>
        <p className="card-text">
          Explore, save, and buy tickets to nearby events or create your own.
        </p>
        <a href="https://gentle-reaches-60799.herokuapp.com/" className="btn btn-secondary">Deployed App</a>
        <a href="https://github.com/neilburt/group-project-2" className="btn btn-secondary">Repository</a>
      </div>
    </div>
  )
}