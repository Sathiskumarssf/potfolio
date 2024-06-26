import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaGithub, FaLinkedin, FaHome, FaEnvelope } from 'react-icons/fa'; // Remove '../../node_modules/' from the import path
import './navbar.css';

const Navbar = () => {
  return (
    <div className='p-1'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Menu</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://www.google.com/maps/@6.4798303,80.6169407,20z?entry=ttu"><FaHome /> Home</a> {/* Use <FaHome /> instead of {FaHome} */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://github.com/Sathiskumarssf"><FaGithub /> Github</a> {/* Use <FaGithub /> instead of {FaGithub} */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/sathis-kumar-97771b246/"><FaLinkedin /> LinkedIn</a> {/* Use <FaLinkedin /> instead of {FaLinkedin} */}
              </li>
              <li className="nav-item">
                <a className="nav-link " href="sathiskumarsk2001@gmail.com"><FaEnvelope/>contect through Email</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
