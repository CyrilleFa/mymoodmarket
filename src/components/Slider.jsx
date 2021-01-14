import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container-slider'>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-1'
              src='https://www.cyrillefabre.com/HostingImages/Blagueur.png'
              alt='Blagueur'
            />
            <Carousel.Caption>
              <h3>Blagueur</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-1'
              src='https://www.cyrillefabre.com/HostingImages/Calin.png'
              alt='Calin'
            />

            <Carousel.Caption>
              <h3>Calin</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-1'
              src='https://www.cyrillefabre.com/HostingImages/Decourage.png'
              alt='Decouragé'
            />

            <Carousel.Caption>
              <h3>Decouragé</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        ;
      </div>
    );
  }
}

export default Slider;
