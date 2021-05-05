import "./ContactForm.css";

export const ContactForm = () => {
  return (
    <form className="form-container my-1">
      <label htmlFor="name">Name</label>
      <input type="text" />
      <div className="line-break"></div>
      <label htmlFor="email">Email</label>
      <input type="email" />
      <div className="line-break"></div>
      <label htmlFor="body">Message</label>
      <textarea name="body" id="contact-body"></textarea>
      <div className="line-break"></div>
      <button>Submit</button>
    </form>
  );
};

export default ContactForm;
