import React from 'react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="App-header">
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-3">Neil Burt</h1>
        <Navigation />
      </div>
    </header>
  )
}