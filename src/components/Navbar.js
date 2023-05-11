import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand text-black fw-bold" href="https://ahmedbil.github.io/ahmedbil/">Ahmed Bilal.</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Button className="nav-link" variant="link" as={Link} to="about" spy={true} smooth={true}>About</Button>
            </li>
            <li className="nav-item">
              <Button className="nav-link" variant="link" as={Link} to="portfolio" spy={true} smooth={true}>Project</Button>
            </li>
            <li className="nav-item">
              <Button className="nav-link" variant="link" as={Link} to="resume" spy={true} smooth={true}>Work Experience</Button>
            </li>
            <li className="nav-item">
              <Button className="nav-link" variant="link" as={Link} to="contact" spy={true} smooth={true}>Contact</Button>
            </li>
            <li className="nav-item">
              <Button className="nav-link" variant="link" href="assets/ahmed-resume.pdf" target="_blank" rel="noopener noreferrer" spy={true} smooth={true}>Resume</Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
