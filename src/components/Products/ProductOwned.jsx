import React from 'react';
import './ProductList.css';
// import PropTypes from 'prop-types';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, image_url } = this.props;
    return (
      <main className='emotion'>
        <img alt={'Emotion pic'} src={image_url} className='emotion-pic' />
        <div classeName='description-emotion'>
          <p>{name}</p>
          <button>Play</button>
        </div>
      </main>
    );
  }
}

export default Product;
