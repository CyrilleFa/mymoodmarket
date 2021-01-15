import React from 'react';
import ReactPlayer from 'react-player';
import './ProductList.css';
// import PropTypes from 'prop-types';

class ProductOwned extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, image_url, full_audio_url } = this.props;
    return (
      <div className='emotion-owned'>
        <img alt={'Emotion pic'} src={image_url} className='emotion-pic' />
        <p>{name}</p>
        <div className='description-emotion player-song'>
          <ReactPlayer
            url={full_audio_url}
            width='250px'
            height='75px'
            playing={false}
            controls={true}
          />
        </div>
      </div>
    );
  }
}

export default ProductOwned;
