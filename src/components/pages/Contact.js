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

    } else if (!name.length || !email.length || !message.length) {
      setErrorMessage('Please complete all fields.');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-6">
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
              <textarea
                value={message}
                name="message"
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                className="form-control"
                rows="4"
                type="text"
                placeholder="your message">
              </textarea>
            </div>
            <button type="button" className="btn" onClick={handleFormSubmit}>Submit</button>
          </form>
          {errorMessage && (
            <div className="alert alert-warning" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}