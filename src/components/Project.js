import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default function Project(props) {

  return (
    <div className="container text-center d-flex column justify-content-center col-2-md portfolio">
      <div className="card">
        <h2 className="card-header">{props.name}</h2>
        <div className="card-body">
          <div className="card-image">{props.image}</div>
          <h5 className="card-text">{props.description}</h5>
          <div className="card-deployed btn">{props.deployed}</div>
          <div className="card-repo btn">{props.repository}</div>
          <h5 className="card-text stack-heading">Technologies</h5>
          <h6 className="card-stack">{props.stack}</h6>
        </div>
      </div>
    </div>
  );
}