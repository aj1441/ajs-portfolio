"use client";

import { useState } from "react";
import styles from "./Contact.module.css";
import { useForm, ValidationError } from "@formspree/react";

const formId= import.meta.env.VITE_FORMSPREE_FORM_ID;


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit, reset] = useForm(formId);

  if (state.submitting) {
    return <p>Submitting…</p>;
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };



  return (
    <section id="contact" className={styles.contact}>
      <h2>Get In Touch</h2>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h3>Let's Connect</h3>
          <p>
            Whether you have a project in mind, a question about my work, or
            just want to say hello, I'd love to hear from you. Fill out the form
            or reach out through any of the channels below.
          </p>
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <span className={styles.methodIcon}>✉️</span>
              <span>ajtech8120@gmail.com</span>
            </div>
            <div className={styles.contactMethod}>
              <span className={styles.methodIcon}>📱</span>
              <span>+1 (480) 447-5655</span>
            </div>
            <div className={styles.contactMethod}>
              <span className={styles.methodIcon}>🔗</span>
              <span>linkedin.com/in/aj-smith8120/</span>
            </div>
            <div className={styles.contactMethod}>
              <span className={styles.methodIcon}>💻</span>
              <span>github.com/aj1441</span>
            </div>
          </div>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <p>I usually respond in 1-2 business days.</p>
            {state.succeeded && (
              <div className={styles.successMessage}>
                <p>Thanks for your message!</p>
                <button onClick={reset} className={styles.resetButton} type="button">
                  Reset
                </button>
              </div>
            )}
          </div>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={state.submitting}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
