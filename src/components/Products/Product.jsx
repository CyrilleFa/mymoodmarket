import React from 'react';
import './ProductList.css';
// import PropTypes from 'prop-types';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, image_url, price } = this.props;
    return (
      <main className='emotion'>
        <img alt={'Emotion pic'} src={image_url} className='emotion-pic' />
        <div className='details-and-cart'>
          <section className='emotion-pre-details'>
            <p>{name}</p>
            <p>{price}€</p>
          </section>
          <span role='img' aria-label='emoji' id='cart-emoji'>
            🛒
          </span>
        </div>
      </main>
    );
  }
}

export default Product;
