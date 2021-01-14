import React from 'react';
import './Home.css';

class Slogan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className='container-slogan'>
        <h1>Ressentez de nouvelles émotions</h1>
        <button className='product-btn'>Voir nos produits</button>
      </section>
    );
  }
}

export default Slogan;
