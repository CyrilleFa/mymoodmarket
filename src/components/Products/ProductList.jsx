import React from 'react';
import axios from 'axios';
import Product from './Product';
import { Link } from 'react-router-dom';
import './ProductList.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null,
      products: [],
    };
  }

  componentDidMount() {
    this.getRandomProductList();
  }

  getRandomProductList() {
    const host = process.env.REACT_APP_API_HOST;
    console.log(host);
    axios
      .get(`${host}/api/emotions`)
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          products: data,
        });
      });
  }

  render() {
    const { products } = this.state;
    return (
      <main className='productlist-container'>
        <h1>Toutes nos émotions en stock</h1>
        <section className='btn-container'>
          <button id='filter-btn'>Trier</button>
          <button id='sort-btn'>Catégories</button>
        </section>
        <section className='emotions-list'>
          {products.map((product) => (
            <Link to={`/products/${product.name}-${product.id}`}>
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image_url={product.image_url}
              />
            </Link>
          ))}
        </section>
      </main>
    );
  }
}

export default ProductList;
