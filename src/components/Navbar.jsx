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
            className='logo'
            src=' https://www.cyrillefabre.com/HostingImages/Logo300x300.png'
            alt=' '
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
              to='/research'
              className={navLinkActive}
              onClick={() => {
                const newRollMenu = !active;
                this.setState({ active: newRollMenu });
              }}
            >
              Advanced search{' '}
              <span role='img' aria-label='emoji'>
                🔎
              </span>
            </Link>
          </li>
          <li className={navItemActive}>
            <Link
              to='/random'
              className={navLinkActive}
              onClick={() => {
                const newRollMenu = !active;
                this.setState({ active: newRollMenu });
              }}
            >
              Random card{' '}
              <span role='img' aria-label='emoji'>
                🎲
              </span>
            </Link>
          </li>
          <li className={navItemActive}>
            <Link
              to='/deckbuilding'
              className={navLinkActive}
              onClick={() => {
                const newRollMenu = !active;
                this.setState({ active: newRollMenu });
              }}
            >
              Deck building{' '}
              <span role='img' aria-label='emoji'>
                🃏
              </span>
            </Link>
          </li>
          <li className={navItemActive}>
            <Link
              to='/tournament'
              className={navLinkActive}
              onClick={() => {
                const newRollMenu = !active;
                this.setState({ active: newRollMenu });
              }}
            >
              Tournaments{' '}
              <span role='img' aria-label='emoji'>
                🎪
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
