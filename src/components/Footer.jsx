import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className='social-container'>
        <h3 className='social-follow'>Social Follow</h3>
        <div className='social-icons'>
          <a href='https://www.youtube.com' className='youtube social'>
            <i className='fab fa-youtube'></i>
          </a>
          <a href='https://www.facebook.com' className='facebook social'>
            <i className='fab fa-facebook'></i>
          </a>
          <a href='https://www.twitter.com' className='twitter social'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='https://www.instagram.com' className='instagram social'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
        <p className='copyright'>© 2021 My Mood Market</p>
      </div>
    </footer>
  );
}
