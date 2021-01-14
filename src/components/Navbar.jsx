import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };
  }

  render() {
    const { active } = this.state;
    const navIsActive = active ? 'nav-list-active' : 'nav-list-inactive';
    const navItemActive = active
      ? 'nav-list-item-active'
      : 'nav-list-item-inactive';
    const navLinkActive = active
      ? 'nav-link-item-active'
      : 'nav-link-item-inactive';
    return (
      <nav className='header'>
        <Link to='/'>
          <img
            className='logo-navbar'
            src='https://www.cyrillefabre.com/HostingImages/Logo300x300.png'
            alt='Logo My Mood Market'
          />
        </Link>
        <h1 className='header-title'>My Mood Market</h1>
        <button
          type='button'
          className='rollmenu'
          aria-label='Open the navbar'
          onClick={() => {
            const newRollMenu = !active;
            this.setState({ active: newRollMenu });
          }}
        >
          <span className='icon-menu' aria-hidden='true'>
            ☰
          </span>
        </button>
        <ul className={navIsActive}>
          <li className={navItemActive}>
            <Link
              to='/products'
              className={navLinkActive}
              onClick={() => {
                const newRollMenu = !active;
                this.setState({ active: newRollMenu });
              }}
            >
              Nos Produits{' '}
              <span role='img' aria-label='emoji'>
                📦
              </span>
            </Link>
          </li>
          <li className={navItemActive}>
            <Link
              to='/library'
              className={navLinkActive}
              onClick={() => {
                const newRollMenu = !active;
                this.setState({ active: newRollMenu });
              }}
            >
              Ma Bibliothèque{' '}
              <span role='img' aria-label='emoji'>
                🎶
              </span>
            </Link>
          </li>
          <li className={navItemActive}>
            <Link
              to='/basket'
              className={navLinkActive}
              onClick={() => {
                const newRollMenu = !active;
                this.setState({ active: newRollMenu });
              }}
            >
              Mon Panier{' '}
              <span role='img' aria-label='emoji'>
                🛒
              </span>
            </Link>
          </li>
          <li className={navItemActive}>
            <Link
              to='/team'
              className={navLinkActive}
              onClick={() => {
                const newRollMenu = !active;
                this.setState({ active: newRollMenu });
              }}
            >
              L'Équipe{' '}
              <span role='img' aria-label='emoji'>
                🧑‍🤝‍🧑
              </span>
            </Link>
          </li>
          <li className={navItemActive}>
            <Link
              to='/contact'
              className={navLinkActive}
              onClick={() => {
                const newRollMenu = !active;
                this.setState({ active: newRollMenu });
              }}
            >
              Contact{' '}
              <span role='img' aria-label='emoji'>
                ✉️
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

Navbar.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Navbar;
