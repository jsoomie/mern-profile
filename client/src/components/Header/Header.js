import "./Header.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Fragment>
      <div className="header-container px-1 all-center">
        <Link to="/">
          <h1>Jonathan Soukaseume</h1>
        </Link>
      </div>
      <div className="header-list-container px-1 all-center">
        <ul className="header-list">
          <li className="github">
            <a
              title="Visit my github!"
              href="https://github.com/sksmejn"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github-square"></i> github
            </a>
          </li>
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/in/jonathan-soukaseume/"
              title="Add me on LinkedIn!"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i> linkedIn
            </a>
          </li>
          <li className="resume">
            <a
              title="Grab my resume!"
              href="https://drive.google.com/file/d/1ZR4-VGneh9u5eKDYIBgDVFg5mXNxKbgP/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <i className="far fa-file"></i> resume
            </a>
          </li>
          <li className="projects">
            <Link to="/projects" title="View my projects!">
              <i className="far fa-folder-open"></i> projects
            </Link>
          </li>
          <li className="contact">
            <Link to="/contact" title="Contact me!">
              <i className="far fa-envelope"></i> contact
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
