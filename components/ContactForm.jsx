"use client";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className={styles["contact-form"]}
    >
      <input
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        className={styles["form-input"]}
      />
      <input
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        className={styles["form-input"]}
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email Address"
        className={styles["form-input"]}
      />
      <input
        type="number"
        id="number"
        name="number"
        placeholder="Phone Number"
        className={styles["form-input"]}
      />
      <div className={styles["checkbox-wrapper"]}>
        <input
          type="checkbox"
          id="agree-checkbox"
          name="agree-checkbox"
          className={styles.check}
        />
        <label htmlFor="agree-checkbox">
          By clicking the button, I agree with the collection and processing of
          my personal data as described in the Privacy policy. *
        </label>
      </div>
      <div>
        <button type="submit" className={styles["form-submit-btn"]}>
          SUBMIT
        </button>
      </div>
    </form>
  );
};
export default ContactForm;
