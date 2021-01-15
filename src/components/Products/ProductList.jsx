import React from 'react';
import axios from 'axios';
import Product from './Product';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './ProductList.css';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: null,
      products: [],
      categories: [],
      sortedList: [],
    };
    this.sortList = this.sortList.bind(this);
    this.resetList = this.resetList.bind(this);
  }

  componentDidMount() {
    this.getRandomProductList();
    this.getCategories();
  }

  getCategories() {
    const host = process.env.REACT_APP_API_HOST;
    console.log(host);
    axios
      .get(`${host}/api/categories`)
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          categories: data,
        });
      });
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
          sortedList: data,
        });
      });
  }

  sortList(event) {
    const id = event.target.value;
    const { products } = this.state;
    // eslint-disable-next-line eqeqeq
    const array = products.filter((product) => product.category_id == id);
    this.setState({
      sortedList: array,
    });
  }

  resetList() {
    const { products } = this.state;
    this.setState({
      sortedList: products,
    });
  }

  render() {
    const { sortedList, categories } = this.state;
    return (
      <main className='productlist-container'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Toutes nos émotions en stock / My Mood Market</title>
          <link rel='canonical' href='https://mymoodmarket.netlify.app/' />
        </Helmet>
        <h1>Toutes nos émotions en stock</h1>
        <section className='btn-container'>
          <button className='sort-btn' id='menu-filtre'>
            Filtres{' '}
          </button>
          <ul className='filters'>
            <button type='button' onClick={this.resetList} id='filter-btn'>
              Tous
            </button>
            {categories.map((categorie) => (
              <li>
                <button
                  value={categorie.id}
                  type='button'
                  onClick={this.sortList}
                  className='sort-btn'
                >
                  {categorie.category_name}
                </button>
              </li>
            ))}
          </ul>
        </section>
        <section className='emotions-list'>
          {sortedList.map((product) => (
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
