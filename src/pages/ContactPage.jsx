const ContactPage = () => {
  return (
    <section className="contactPage-wrapper">
      <div className="contact-info-box">
        <h1>CONTACT US</h1>
        <ul>
          <li>Email: companyinfo@gmail.com</li>
          <li>Address: Company Street 10 </li>
          <li>Phone: +995 555123123</li>
        </ul>
      </div>
      <form className="contact-form">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          className="form-input"
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          className="form-input"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email Address"
          className="form-input"
        />
        <input
          type="number"
          id="number"
          name="number"
          placeholder="Phone Number"
          className="form-input"
        />
        <div className="checkbox-wrapper">
          <input
            type="checkbox"
            id="agree-checkbox"
            name="agree-checkbox"
            className="check"
          />
          <label htmlFor="agree-checkbox">
            By clicking the button, I agree with the collection and processing
            of my personal data as described in the Privacy policy. *
          </label>
        </div>
        <div>
          <button className="form-submit-btn">SUBMIT</button>
        </div>
      </form>
    </section>
  );
};
export default ContactPage;
