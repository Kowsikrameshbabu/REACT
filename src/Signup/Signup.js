import "./Signup.css";
import React, { useEffect } from "react";
import { Link } from 'react-router-dom';


function Signup() {
  useEffect(() => {
    const form = document.querySelector('#form');
    const username = document.querySelector('#username');    
    const password = document.querySelector('#password');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      validateInputs();
    });

    function validateInputs() {
      const usernameVal = username.value.trim();     
      const passwordVal = password.value.trim();

      if (usernameVal === '') {
        setError(username, 'Username is required');
      } else {
        setSuccess(username);
      }

      if (passwordVal.length < 8) {
        setError(password, 'Password must be at least 8 characters long');
      } else {
        setSuccess(password);
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

  }, []); 

  return (
    <div className="all">
    <h1> PlanAhead</h1>
    <div className="container">
      <form action="" id="form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
          <div className="error"></div>
        </div>
       
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <div className="error"></div>
        </div>
       <p> New User
       <a>Register</a>
       </p>
       <button >Sign In</button>
      </form>
    </div>
    </div>
  );
}

export default Signup;
