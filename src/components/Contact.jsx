import React from 'react'
import image from '../assets/image.png'


function Contact() {
  return (
    <div className='container d-flex'>
      <div className="container mt-5">
        {/* Introductory Message */}
        <div className="alert alert-info mb-4" role="alert">
          If you have any questions or issues, please fill out the form below, and we will get back to you as soon as possible.
        </div>
        <form action="" className="p-3">
    {/* Name Input */}
    <div className="row mb-3">
      <label className="col-sm-3 col-form-label" htmlFor="user-name">
        Enter your name
      </label>
      <div className="col-sm-9">
        <input
          type="text"
          id="user-name"
          className="form-control"
          required
        />
      </div>
    </div>

    {/* Email Input */}
    <div className="row mb-3">
      <label className="col-sm-3 col-form-label" htmlFor="user-email">
        Enter your email
      </label>
      <div className="col-sm-9">
        <input
          type="email"
          id="user-email"
          className="form-control"
          required
        />
      </div>
    </div>

    {/* Message Textarea */}
    <div className="row mb-3">
      <label className="col-sm-3 col-form-label" htmlFor="user-message">
        Message
      </label>
      <div className="col-sm-9">
        <textarea
          id="user-message"
          className="form-control"
          rows="3"
          required
        />
      </div>
    </div>

    <button type="submit" className="btn btn-primary">
      Send
    </button>
        </form>

      </div>
      <img src={image} alt="" />

    </div>
  )
}

export default Contact