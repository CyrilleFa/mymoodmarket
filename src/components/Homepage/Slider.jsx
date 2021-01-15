import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderIDs: [],
      sliderProducts: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts() {
    const randomArray = [];
    while (randomArray.length < 6) {
      const number = Math.floor(Math.random() * Math.floor(17));
      if (number === 0 || randomArray.includes(number)) {
      } else {
        randomArray.push(number);
      }
    }
    console.log(randomArray);
    const host = process.env.REACT_APP_API_HOST;
    axios
      .all(
        randomArray.map((id) =>
          axios.get(`${host}/api/emotions/${id}`).then((res) => res.data[0])
        )
      )
      .then((data) => {
        console.log(data);
        this.setState({
          sliderProducts: data,
        });
      });
  }

  render() {
    const { sliderProducts } = this.state;
    return (
      <section className='container-slider'>
        <Carousel>
          {sliderProducts.map((product) => (
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={product.image_url}
                alt={product.name}
              />
              <Link to={`/products/${product.name}-${product.id}`}>
                <Carousel.Caption>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    );
  }
}

export default Slider;
