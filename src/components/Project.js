import React from 'react';

export default function Project(props) {

  return (
    <div className="container-fluid text-center d-flex column justify-content-center col-6-md col-3-sm portfolio">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{props.name}</h2>
          <div className="card-image">{props.image}</div>
          <p className="card-text">{props.description}</p>
          <div className="card-deployed">{props.deployed}</div>
          <div className="card-repo">{props.repository}</div>
        </div>
      </div>
    </div>
  );
}