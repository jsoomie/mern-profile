import "./Footer.css";
import { useState } from "react";
import FooterContact from "./FooterContact/FooterContact";

export const Footer = () => {
  const [showContact, setShowContact] = useState(false);

  const showHide = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="footer-container all-center">
      {showContact && <FooterContact />}
      <button onClick={showHide}>
        <i className="far fa-envelope"></i>
      </button>
    </div>
  );
};

export default Footer;
