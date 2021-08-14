import React, { useState } from 'react';
import { validateEmail } from '../../utils/verify';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  const handleInputBlur = (e) => {
    if (!e.target.value.length) {
      setErrorMessage(`${e.target.name} is required`);
    } else {
      setErrorMessage('');
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email.');
      return;

    } else if (!name.length || !email.length || !message.length){
      setErrorMessage('Please complete all fields.');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div>
      <form className="form">
        <div className="form-group">
        <label for="name">Name</label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="form-control"
          type="text"
          placeholder="name"
        />
        </div>
        <div class="form-group">
        <label for="email">Email</label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="form-control"
          type="email"
          placeholder="email"
        />
        </div>
        <div class="form-group">
        <label for="message">Message</label>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          className="form-control"
          type="textbox"
          placeholder="your message"
        />
        </div>
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  )
}