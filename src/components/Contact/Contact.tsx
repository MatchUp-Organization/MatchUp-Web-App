import React from "react";
import styles from "./contact.module.css";

const ContactForm: React.FC = () => {
  return (
    <div className={styles.container} id="contact">
      <div className={styles.textSection}>
        <h2>
          Got a question
          <br />
          for us?
          <br />
          Send us an <br/>email using our
          <br />
          contact form!
        </h2>
      </div>
      <div className={styles.formSection}>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Mail</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="textarea"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
