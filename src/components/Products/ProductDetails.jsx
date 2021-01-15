import React from 'react';
import ReactPlayer from 'react-player';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import './ProductDetails.css';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      id: this.props.match.params.product.split('-')[1],
      isOwned: false,
    };
  }

  componentDidMount() {
    this.getProduct();
    this.isOwnedCheck();
  }

  isOwnedCheck() {
    if (localStorage.getItem(this.state.id) === this.state.id) {
      this.setState({
        isOwned: true,
      });
    } else {
      this.setState({
        isOwned: false,
      });
    }
  }

  getProduct() {
    const host = process.env.REACT_APP_API_HOST;
    const slug = this.props.match.params.product;
    const id = slug.split('-')[1];
    console.log(id);
    axios
      .get(`${host}/api/emotions/${id}`)
      .then((res) => res.data)
      .then((data) => {
        this.setState({
          details: data[0],
        });
      });
  }

  render() {
    const { details, isOwned, id } = this.state;
    return (
      <main className='product-details-container'>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{`Emotion ${details.name} / My Mood Market`} </title>
          <link rel='canonical' href='https://mymoodmarket.netlify.app/' />
        </Helmet>
        <h1>{details.name}</h1>
        <img alt={details.name} src={details.image_url} />
        <h2 className='price'>{`Prix: ${details.price} €`}</h2>
        <div className='player-song'>
          <ReactPlayer
            url={details.audio_url}
            width='250px'
            height='75px'
            wrapper='div'
            playing={false}
            controls={true}
          />
        </div>
        <button
          type='button'
          className={isOwned ? 'hideButton' : 'buyButton'}
          onClick={() => {
            localStorage.setItem(id, id);
          }}
        >
          Acheter
        </button>
        <h3>"{details.description}"</h3>
      </main>
    );
  }
}

export default ProductDetails;
