import "./ContactForm.css";
import { useRef } from "react";

export const ContactForm = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const bodyInput = useRef();

  const submitBtn = (event) => {
    event.preventDefault();
    const name = nameInput.current.value;
    const email = emailInput.current.value;
    const body = bodyInput.current.value;

    window.location = `mailto:jsoomie@gmail.com?subject=${name}:${email}&body=${body}`;
  };

  return (
    <form className="form-container my-1" action="submit" onSubmit={submitBtn}>
      <label htmlFor="name">Name</label>
      <input type="text" ref={nameInput} />
      <div className="line-break"></div>
      <label htmlFor="email">Email</label>
      <input type="email" ref={emailInput} />
      <div className="line-break"></div>
      <label htmlFor="body">Message</label>
      <textarea name="body" id="contact-body" ref={bodyInput}></textarea>
      <div className="line-break"></div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
