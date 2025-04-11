"use client"

import { useState } from "react"
import styles from "./Contact.module.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    })
    alert("Thank you for your message! I will get back to you soon.")
  }

  return (
    <section id="contact" className={styles.contact}>
      <h2>Get In Touch</h2>
      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h3>Let's Connect</h3>
          <p>
            Whether you have a project in mind, a question about my work, or just want to say hello, I'd love to hear
            from you. Fill out the form or reach out through any of the channels below.
          </p>
          <div className={styles.contactMethods}>
            <div className={styles.contactMethod}>
              <span className={styles.methodIcon}>✉️</span>
              <span>email@example.com</span>
            </div>
            <div className={styles.contactMethod}>
              <span className={styles.methodIcon}>📱</span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className={styles.contactMethod}>
              <span className={styles.methodIcon}>🔗</span>
              <span>linkedin.com/in/yourprofile</span>
            </div>
            <div className={styles.contactMethod}>
              <span className={styles.methodIcon}>💻</span>
              <span>github.com/yourusername</span>
            </div>
          </div>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
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
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

