import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import '../App.css';

export default function Header() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    return <Resume />
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <header>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3">Neil Burt</h1>
            <p className="lead">Full Stack Developer</p>
          </div>
        </div>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>

      {renderPage()}
      <Footer />
    </>
  )
}