import "./Header.css";
import { Fragment } from "react";

export const Header = () => {
  return (
    <Fragment>
      <div className="header-container px-1">
        <h1>Jonathan Soukaseume</h1>
      </div>
      <div className="header-list-container px-1">
        <ul className="header-list">
          <li>
            <a href="https://github.com/sksmejn">
              <i class="fab fa-github-square"></i> Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jonathan-soukaseume/"
              title="Add me on LinkedIn!"
            >
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1ZR4-VGneh9u5eKDYIBgDVFg5mXNxKbgP/view?usp=sharing">
              Resume
            </a>
          </li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Header;
