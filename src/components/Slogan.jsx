import React from 'react';
import './Home.css';

class Slogan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container-slogan'>
        <h1>Slogan qui a disparu</h1>
        <button className='product-btn'>Voir les produits !</button>
      </div>
    );
  }
}

export default Slogan;
