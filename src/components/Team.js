import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import kamil from '../assets/images/jonek.jpg';
import maks from '../assets/images/maks.png';
import putek from '../assets/images/putek.png';
import domi from '../assets/images/domi.jpg';
import ryglos from '../assets/images/ryglos.jpg';
import tymek from '../assets/images/tymek.jpg';
import smith from '../assets/images/smith.png';

function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <h2>Our Team</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="member">
              <img src={kamil} alt="team member" />
              <div className="member-details">
                <h3>Kamil Jonak</h3>
                <p>.NET Developer</p>
                <ul>
                  <li><a href="https://www.linkedin.com/in/kamil-jonak/"><FaLinkedin /></a></li>
                  <li><a href="https://github.com/kamiljonak"><FaGithub /></a></li>
                </ul>
              </div>
            </div>
            <div className="member">
              <img src={ryglos} alt="team member" />
              <div className="member-details">
                <h3>Adam Rygiel</h3>
                <p>SQL Specialist</p>
                <ul>
                  <li><a href="https://www.linkedin.com/in/mark-johnson/"><FaLinkedin /></a></li>
                  <li><a href="https://github.com/markjohnson"><FaGithub /></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="member">
              <img src={maks} alt="team member" />
              <div className="member-details">
                <h3>Maks Sudoł</h3>
                <p>.NET Developer</p>
                <ul>
                  <li><a href="https://www.linkedin.com/in/jane-doe/"><FaLinkedin /></a></li>
                  <li><a href="https://github.com/markjohnson"><FaGithub /></a></li>
                </ul>
              </div>
            </div>
            <div className="member">
              <img src={putek} alt="team member" />
              <div className="member-details">
                <h3>Piotr Puto</h3>
                <p>.NET developer</p>
                <ul>
                  <li><a href="https://www.linkedin.com/in/mark-johnson/"><FaLinkedin /></a></li>
                  <li><a href="https://github.com/markjohnson"><FaGithub /></a></li>
                </ul>
              </div>
              </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <div className="member">
          <img src={smith} alt="team member" />
          <div className="member-details">
            <h3>Mateusz Kowalczyk</h3>
            <p>React developer</p>
            <ul>
              <li><a href="https://www.linkedin.com/in/mark-johnson/"><FaLinkedin /></a></li>
              <li><a href="https://github.com/markjohnson"><FaGithub /></a></li>
            </ul>
          </div>
        </div>
        <div className="member">
          <img src={domi} alt="team member" />
          <div className="member-details">
            <h3>Dominik Pieczonko</h3>
            <p>Marketing specialist</p>
            <ul>
              <li><a href="https://www.linkedin.com/in/mark-johnson/"><FaLinkedin /></a></li>
              <li><a href="https://github.com/markjohnson"><FaGithub /></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="member">
          <img src={tymek} alt="team member" />
          <div className="member-details">
            <h3>Tymoteusz Kossek</h3>
            <p>React developer</p>
            <ul>
              <li><a href="https://www.linkedin.com/in/mark-johnson/"><FaLinkedin /></a></li>
              <li><a href="https://github.com/markjohnson"><FaGithub /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}

export default Team;