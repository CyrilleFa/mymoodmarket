import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Slogan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='container-slogan'>
        <h1>VIVEZ DE NOUVELLES EMOTIONS</h1>
        <Link to='/products'>
          <button className='product-btn'>Voir nos produits</button>
        </Link>
      </section>
    );
  }
}

export default Slogan;
