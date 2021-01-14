import React from 'react';
import axios from 'axios';
import Product from './Product';
require('dotenv').config();

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null,
      products: [
        {
          id: 9,
          name: 'rage',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          price: 300,
          image_url: 'https://www.cyrillefabre.com/HostingImages/Fache.png',
          audio_url: 'https://example.com',
          category_id: 2,
        },
        {
          id: 10,
          name: 'jalousie',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          price: 250,
          image_url: 'https://www.cyrillefabre.com/HostingImages/Decourage.png',
          audio_url: 'https://example.com',
          category_id: 2,
        },
      ],
    };
  }

  componentDidMount() {
    this.getRandomProductList();
  }

  getRandomProductList() {
    axios
      .get(`${process.env.API_HOST}/api/emotions`)
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          list: data,
        });
      });
  }

  render() {
    const { products } = this.state;
    return (
      <div className='ProductList'>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image_url={product.image_url}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
