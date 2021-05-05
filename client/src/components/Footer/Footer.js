import "./Footer.css";
import { useState, useEffect, useRef } from "react";
import FooterContact from "./FooterContact/FooterContact";

export const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  const buttonRef = useRef(null);

  const showHide = () => {
    setShowContact(!showContact);
  };

  const useClickOutside = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowContact(showContact);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);
  };

  useClickOutside(buttonRef);

  return (
    <div className="footer-container all-center">
      {showContact && <FooterContact />}
      <button onClick={showHide} ref={buttonRef}>
        <i className="far fa-envelope"></i>
      </button>
    </div>
  );
};

export default Footer;
