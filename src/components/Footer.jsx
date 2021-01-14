import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <Link to='/'>
          <div className='footer-logo'>
            <img
              src='https://www.cyrillefabre.com/HostingImages/Logo300x300.png'
              width='150'
              height='150'
              alt='Logo My Mood Market'
            />
          </div>
        </Link>
        <div className='footer-sitemap'>
          <h3 className='social-follow footer-titre'>Plan du site</h3>
          <ul>
            <Link to='/'>
              <li className='footer-list'>Mentions Légales</li>
            </Link>
            <Link to='/'>
              <li className='footer-list'>CGU</li>
            </Link>
          </ul>
        </div>
        <div className='social-container'>
          <h3 className='social-follow footer-titre'>Social Networks</h3>
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
        </div>
      </div>
      <p className='copyright'>© 2021 My Mood Market</p>
    </footer>
  );
}
