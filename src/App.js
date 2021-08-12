import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Project from './pages/Project';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Footer />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}