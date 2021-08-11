import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components';
import Footer from './components';
import Home from '/pages';
import About from '/pages';
import Project from '/pages';
import Contact from '/pages';
import '/App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Footer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  )
}