import React, { useState, useEffect } from 'react';
import Company from './Company';
import Projects from './Projects';
import Contact from './Contact';
import Charts from './Charts';
import Team from './Team';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../assets/images/background.jpg';

function TypingText({ text }) {
  const [visibleText, setVisibleText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setVisibleText(text.slice(0, i));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <h1>{visibleText}</h1>
  );
}

function Home() {
  return (
    <><section 
        className="home" 
        id="home" 
        style={{
          position: 'relative', 
          height: '100vh',
          backgroundImage: `url(${backgroundImage})`, // Use the image as the background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
        <div className="container">
            <TypingText text="Welcome to DripStream" />
            <p>We're a software house dedicated to creating innovative solutions that help businesses succeed. 
                Our team of expert developers, designers, and project managers work together to deliver high-quality 
                products that meet your needs and exceed your expectations.
            </p>
            <ScrollLink to="company" smooth>
                <div className="learn-more">
                    <FontAwesomeIcon icon={faArrowDown} />
                </div>
            </ScrollLink>
        </div>
      </section><Company /><Charts/><Projects /><Team /><Contact /></>
  );
}

export default Home;