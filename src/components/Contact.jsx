import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: '',
      firstName: '',
      email: '',
    };
  }

  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  submit = (e) => {
    e.preventDefault();
  };

  render() {
    const { firstName, lastName, email } = this.state;
    return (
      <div className='ContactForm'>
        <div className='contactform-title'>
          <h2>Contact</h2>
        </div>
        <div className='contactform-container'>
          <form onSubmit={this.submit}>
            <label htmlFor='firstname'>
              <input
                type='text'
                id='firstName'
                placeholder='Prénom'
                className='form-control'
                value={firstName}
                onChange={this.change}
              />
            </label>
            <label htmlFor='lastname'>
              <input
                type='text'
                id='lastName'
                placeholder='Nom'
                className='form-control'
                value={lastName}
                onChange={this.change}
              />
            </label>
            <label htmlFor='email'>
              <input
                type='text'
                id='email'
                value={email}
                placeholder='Mail'
                className='form-control'
                onChange={this.change}
              />
            </label>
            <label htmlFor='msg'>
              <textarea
                type='text'
                id='msg'
                placeholder='Message'
                className='form-control'
                onChange={this.change}
              />
            </label>
            <button className='searchButton-form' type='submit'>
              Envoyer
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
