import React, { useState } from "react";
import './contact.css'

const Contacts = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [touchedFields, setTouchedFields] = useState({
    firstName: false,
    lastName: false,
    email: false,
    request: false,
  });

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleReset = () => {
    if (!isEmailValid(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!firstName || !lastName || !email || !request) {
      setTouchedFields({
        firstName: !firstName,
        lastName: !lastName,
        email: !email,
        request: !request,
      });
      return;
    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setRequest("");
    setTouchedFields({
      firstName: false,
      lastName: false,
      email: false,
      request: false,
    });

    alert("🚀Thank you , ✨Your request has been sent");
  };

  return (
    <div className="contact-form">
      <div>
        <h1>Batistack Development</h1>
      </div>
      <div className="contact">
        <p>First Name:</p>
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={touchedFields.firstName && !firstName ? "error" : ""}
        />
        {touchedFields.firstName && !firstName && (
          <div className="error-message">You must enter First Name</div>
        )}
        <p>Last Name:</p>
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={touchedFields.lastName && !lastName ? "error" : ""}
        />
        {touchedFields.lastName && !lastName && (
          <div className="error-message">You must enter Last Name</div>
        )}
        <p>Email:</p>
        <input
          type="email"
          placeholder="Enter Valid Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={
            touchedFields.email && !isEmailValid(email) ? "error" : ""
          }
        />
        {touchedFields.email && !isEmailValid(email) && (
          <div className="error-message">Enter a valid Email</div>
        )}
        <div className="text-area">
          <textarea
            placeholder="Enter your request here"
            cols="30"
            rows="10"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            className={touchedFields.request && !request ? "error" : ""}
          ></textarea>
          {touchedFields.request && !request && (
            <div className="error-message">You must enter a Request</div>
          )}
        </div>
        <button className="btn" onClick={handleReset}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contacts;
