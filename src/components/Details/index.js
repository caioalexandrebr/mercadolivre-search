import React, { Component } from 'react';

const axios = require('axios');

class Details extends Component {
  state = {
    product: [],
  }

  constructor() {
    super();
    this.fetchUser = this.fetchProduct.bind(this);
  }

  fetchProduct = (params) => {
    return axios({
      method: 'get',
      url: `https://api.mercadolibre.com/items/${params}`
    })
    .then(response => {
      console.log(response);
      this.setState({ product: response.data.results });
    })
  }

  componentDidMount() {
    setTimeout(() => {
      const params = this.props.params;
      this.fetchProduct(params);
    });
  }

  render() {
    return (
      <>
        <h1>Details</h1>
      </>
    );
  };
};

export default Details;
