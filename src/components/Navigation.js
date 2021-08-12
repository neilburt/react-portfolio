import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  state = {
    open: false,
    width: window.innerWidth
  }

  updateWidth = () => {
    const newState = { width: window.innerWidth }

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState)
  }

  toggleNav = () => {
    this.setState({ open: !this.state.open })
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth)
  }

  render() {
    return (
      <nav className="navbar-inverse navbar-expand-lg navbar-light bg-light mb-2">
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/project" ? "nav-link active" : "nav-link"}
                to="/project"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation;