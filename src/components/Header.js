import React, { useState } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

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
    <header className="App-header">
      <div className="jumbotron jumbotron-fluid">
        <h1 className="display-3">Neil Burt</h1>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
      </div>
    </header>
    <Footer />
    </>
  )
}