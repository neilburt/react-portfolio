import React, { useState } from 'react';
import { validateEmail } from '../../utils/verify';
import '../../App.css';
import { send } from 'emailjs-com';

export default function Contact() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [toSend, setToSend] = useState({
    name: '',
    me: 'Neil',
    message: '',
    email: ''
  })

  const handleInputChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
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

    send(
      'service_jp5k0hn',
      'template_j2vk4wk',
      toSend,
      'user_HucWiei8oZXhw20s1Txn6'
    )
      .then((res) => {
        setSuccessMessage('Email message sent.')
        console.log('SUCCESS!', res.status, res.text)
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })

    if (!validateEmail(toSend.email)) {
      setErrorMessage('Please enter a valid email.');
      return;

    } else if (!toSend.name.length || !toSend.email.length || !toSend.message.length) {
      setErrorMessage('Please complete all fields.');
      return;
    }

    setToSend({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="contact-heading">
            <h4>For your convenience, the form below can be used to contact me directly.</h4>
          </div>
          <form className="form">
            <div className="form-group">
              <label for="name">Name</label>
              <input
                value={toSend.name}
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
                value={toSend.email}
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
                value={toSend.message}
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
            <div className="alert alert-warning col-5" role="alert">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="alert alert-success col-5" role="alert">
              {successMessage}
            </div>
          )}
          <div className="text-center contact-footing">
            <h5>Else, feel free to use my email address: <a href="mailto:neil.burt@comcast.net">neil.burt@comcast.net</a>.</h5>
          </div>
        </div>
      </div>
    </div>
  )
}