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
      <main className='emotion'>
        <img alt={'Emotion pic'} src={image_url} className='emotion-pic' />
        <div classeName='description-emotion'>
          <p>{name}</p>
          <ReactPlayer
            className='player-song'
            url={full_audio_url}
            width='250px'
            height='75px'
            playing={false}
            controls={true}
          />
        </div>
      </main>
    );
  }
}

export default ProductOwned;
