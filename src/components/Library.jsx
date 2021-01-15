import React from 'react';
import axios from 'axios';
import ProductOwned from './Products/ProductOwned';
import { Helmet } from 'react-helmet';
import './Products/ProductList.css';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      productsOwned: null,
    };
  }

  componentDidMount() {
    this.getOwned();
  }

  getOwned() {
    const host = process.env.REACT_APP_API_HOST;
    const { length } = localStorage;
    const { productList } = this.state;
    for (let i = 0; i < length; i += 1) {
      this.setState({
        productList: productList.push(localStorage.key(i)),
      });
    }
    axios
      .all(
        productList.map((id) =>
          axios.get(`${host}/api/emotions/${id}`).then((res) => res.data[0])
        )
      )
      .then((data) => {
        this.setState({
          productsOwned: data,
        });
      });
  }

  renderResults = () => {
    const { productsOwned } = this.state;
    if (productsOwned) {
      return (
        <div className='sounds-container'>
          {productsOwned.map((product) => (
            <ProductOwned
              key={product.id}
              id={product.id}
              name={product.name}
              image_url={product.image_url}
              full_audio_url={product.full_audio_url}
            />
          ))}
        </div>
      );
    }
  };

  render() {
    return (
      <main className='productlist-container'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Ma bibliothèque de sons / My Mood Market</title>
          <link rel='canonical' href='https://mymoodmarket.netlify.app/' />
        </Helmet>
        <h1>Bibliothèque de sons</h1>
        <p className='sort-btn'>Vos sons téléchargés :</p>
        {this.renderResults()}
      </main>
    );
  }
}

export default Library;
