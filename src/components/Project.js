import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function Project(props) {

  return (
    <div className="container-fluid text-center d-flex column justify-content-center col-6-md col-3-sm portfolio">
      <div className="card">
          <h2 className="card-header">{props.name}</h2>
        <div className="card-body">
          <div className="card-image">{props.image}</div>
          <h5 className="card-text">{props.description}</h5>
          <div className="card-deployed btn">{props.deployed}</div>
          <div className="card-repo btn">{props.repository}</div>
        </div>
      </div>
    </div>
  );
}