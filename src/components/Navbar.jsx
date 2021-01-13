import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }

  handleClick = () => {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  };

  handleClickCloseBurgerMenu = () => {
    this.setState({ clicked: false });
  };

  render() {
    const { clicked } = this.state;
    return (
      <nav className='navbar'>
        <Link className='home-link' to='/'>
          <img src='#' alt='logo' className='navbar-logo' />
        </Link>
        <div className='menucenter'>
          <button
            type='button'
            className='menu-icon'
            onClick={this.handleClick}
          >
            <i className={clicked ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
          <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <span role='img' aria-label='Home'>
                📦
              </span>
              <Link
                to='/products'
                className='cool-link'
                onClick={this.handleClickCloseBurgerMenu}
              >
                Produits
              </Link>
            </li>
            <li>
              <span role='img' aria-label='Mea by Area'>
                🎶
              </span>
              <Link
                to='/library'
                className='cool-link'
                onClick={this.handleClickCloseBurgerMenu}
              >
                Ma Bibliothèque
              </Link>
            </li>
          </ul>
          <div className='title'>
            <h1>My Mood Market</h1>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
