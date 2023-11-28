import "./LandingPage.css";
import React, { useEffect } from "react";

export default function LandingPage() {
  
  useEffect(() => {
    const form = document.querySelector('#form');
    const username = document.querySelector('#username');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const cpassword = document.querySelector('#cpassword');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      validateInputs();
    });

    function validateInputs() {
      const usernameVal = username.value.trim();
      const emailVal = email.value.trim();
      const passwordVal = password.value.trim();
      const cpasswordVal = cpassword.value.trim();

      if (usernameVal === '') {
        setError(username, 'Username is required');
      } else {
        setSuccess(username);
      }
      if (emailVal === '') {
        setError(email, 'Email is required');
      } else if (!validateEmail(emailVal)) {
        setError(email, 'Email is invalid');
      } else {
        setSuccess(email);
      }
      if (passwordVal.length < 8) {
        setError(password, 'Password must be at least 8 characters long');
      } else {
        setSuccess(password);
      }
      if (cpasswordVal !== passwordVal) {
        setError(cpassword, 'Password does not match');
      } else {
        setSuccess(cpassword);
      }
    }

    function setError(element, message) {
      const inputGroup = element.parentElement;
      const errorElement = inputGroup.querySelector('.error');

      errorElement.innerText = message;
      inputGroup.classList.add('error');
      inputGroup.classList.remove('success');
    }

    function setSuccess(element) {
      const inputGroup = element.parentElement;
      const errorElement = inputGroup.querySelector('.error');

      errorElement.innerText = '';
      inputGroup.classList.add('success');
      inputGroup.classList.remove('error');
    }

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    };

  }, []); 

  return (
    <div>
   
    <h1>PlanAhead</h1>
    <div className="container">
      <form action="" id="form">
       
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
          <div className="error"></div>
        </div>
        <div className="input-group">
          <label htmlFor="email">EmailId</label>
          <input type="email" id="email" name="email" />
          <div className="error"></div>
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <div className="error"></div>
        </div>
        <div className="input-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="password" id="cpassword" name="cpassword" />
          <div className="error"></div>
        </div>
        <button >Register</button>
      </form>
    </div>
    </div>
  );
}