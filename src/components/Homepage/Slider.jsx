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
      <section className='container-slider'>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
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
              className='d-block w-100'
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
              className='d-block w-100'
              src='https://www.cyrillefabre.com/HostingImages/Decu.png'
              alt='Decu'
            />

            <Carousel.Caption>
              <h3>Decu</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://www.cyrillefabre.com/HostingImages/Desole.png'
              alt='Desole'
            />

            <Carousel.Caption>
              <h3>Désolé</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://www.cyrillefabre.com/HostingImages/Embarrasse.png'
              alt='Embarrasse'
            />

            <Carousel.Caption>
              <h3>Embarrassé</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://www.cyrillefabre.com/HostingImages/Excite.png'
              alt='Excite'
            />

            <Carousel.Caption>
              <h3>Excité</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    );
  }
}

export default Slider;
