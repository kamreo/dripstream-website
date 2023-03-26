import React , { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Company from './components/Company';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Team from './components/Team';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import './styles/index.scss';
import './styles/Home.scss';
import './styles/Team.scss';
import './styles/Project.scss';
import './styles/Company.scss';
import './styles/Header.scss';
import './styles/Charts.scss';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark' : ''}`}>
        <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;