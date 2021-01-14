import React from 'react';
// import PropTypes from 'prop-types';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, image_url, price } = this.props;
    return (
      <div className='Product'>
        <img alt={name} src={image_url} />
        <h3>{name}</h3>
        <h4>Prix: {price}€</h4>
      </div>
    );
  }
}

export default Product;
