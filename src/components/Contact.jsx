import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.user_name.value;
    const email = e.target.user_email.value;
    const message = e.target.message.value;

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      alert("Please enter a valid email.");
      return;
    }

    if (!message.trim()) {
      alert("Please enter your message.");
      return;
    }

    emailjs
      .sendForm(
        "service_o8bul2h",
        "template_qhm164i",
        form.current,
        "nv5BCejYsrxTMltQm"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("✨🌟Your Request was successfully sent, 🚀✅!  Thank You");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("❌❌Oops! Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-form">
      <h2 className="contact-h2">Contact Us and Say Hello!</h2>
      <p>
        We'd love to hear from you. Reach out to us with any questions,
        inquiries, or just to say hi.
      </p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <div>
        <p className="contact-incentive">
          At Batistack Development, we're committed to helping you shine online.
          We're offering a limited-time special incentive:
        </p>
        <p className="contact-incentive">
          🚀 First Website? Get a big discount!
        </p>
        <p className="contact-incentive">
          💫 Plus, enjoy the first year free of charge on any updates or
          redesigns to your website!
        </p>
        <p className="contact-incentive">
          Reach out to us with your details, and let's kickstart your online
          journey together!
        </p>
      </div>
    </div>
  );
};

export default Contacts;
