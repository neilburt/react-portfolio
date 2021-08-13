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
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="text"
          placeholder="name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          type="textbox"
          placeholder="your message"
        />
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