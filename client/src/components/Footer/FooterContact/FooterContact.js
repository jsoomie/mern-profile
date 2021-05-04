import "./FooterContact.css";

export const FooterContact = () => {
  return (
    <div>
      <ul className="footer-contact-container">
        <li>
          <a href="https://github.com/sksmejn">
            <i className="fab fa-github-square" /> Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jonathan-soukaseume/"
            title="Add me on LinkedIn!"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1ZR4-VGneh9u5eKDYIBgDVFg5mXNxKbgP/view?usp=sharing">
            <i className="far fa-file"></i> Resume
          </a>
        </li>
        <li>
          <i className="far fa-envelope"></i> Email
        </li>
      </ul>
    </div>
  );
};

export default FooterContact;
