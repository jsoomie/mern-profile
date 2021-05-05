export const ContactForm = () => {
  return (
    <form action="">
      <label htmlFor="name">Name</label>
      <input type="text" />
      <label htmlFor="email">Email</label>
      <input type="email" />
      <label htmlFor="body">Message</label>
      <textarea name="body" id="contact-body" cols="30" rows="10"></textarea>
    </form>
  );
};

export default ContactForm;
