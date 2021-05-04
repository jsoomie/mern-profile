import "./Footer.css";
import { useState } from "react";
import { Contact } from "../../pages";

export const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  const showHide = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="footer-container all-center">
      {showContact && <Contact />}
      <button onClick={showHide}>
        <i className="far fa-envelope"></i>
      </button>
    </div>
  );
};

export default Footer;
