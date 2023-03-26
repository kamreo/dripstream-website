import React from 'react';
import Company from './Company';
import Projects from './Projects';
import Contact from './Contact';
import Team from './Team';
import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import videoBackground from '../assets/videos/background.mp4'; // Import the video file


function Home() {
  return (
    <><section 
        className="home" 
        id="home" 
        style={{
            position: 'relative', // Add position: relative to make the video cover the entire section
            height: '100vh',
        }}>
            <video
          src={videoBackground} // Add the video file as the source of the video
          autoPlay // Add the autoplay attribute to automatically play the video
          muted // Add the muted attribute to mute the video by default
          loop // Add the loop attribute to make the video loop continuously
          style={{
            position: 'absolute', // Add position: absolute to cover the entire section
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Add object-fit: cover to make the video cover the entire section
          }}
        />
        <div className="container">
            <h1>Welcome to DripStream</h1>
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
      </section><Company /><Projects /><Team /><Contact /></>
  );
}

export default Home;