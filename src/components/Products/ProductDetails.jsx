import React from 'react';
import axios from 'axios';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
    };
  }

  componentDidMount() {
    this.getRandomProductList();
  }

  getRandomProductList() {
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
    const { details } = this.state;
    return <h1>{details.name}</h1>;
  }
}

export default ProductDetails;
