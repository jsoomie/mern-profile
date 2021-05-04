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
            <a href="https://github.com/sksmejn">
              <i className="fab fa-github-square"></i> Github
            </a>
          </li>
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/in/jonathan-soukaseume/"
              title="Add me on LinkedIn!"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li className="resume">
            <a href="https://drive.google.com/file/d/1ZR4-VGneh9u5eKDYIBgDVFg5mXNxKbgP/view?usp=sharing">
              <i className="far fa-file"></i> Resume
            </a>
          </li>
          <li className="projects">
            <Link to="/projects">
              <i className="far fa-folder-open"></i> Projects
            </Link>
          </li>
          <li className="contact">
            <Link to="/contact">
              <i className="far fa-envelope"></i> Contact
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
