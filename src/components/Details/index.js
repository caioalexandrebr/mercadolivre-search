import React, { Component } from 'react';

const axios = require('axios');

class Details extends Component {
  state = {
    product: [],
    description: []
  }

  constructor() {
    super();
    this.fetchUser = this.fetchProduct.bind(this);
  }

  fetchProduct = (productId) => {
    return axios({
      method: 'get',
      url: `https://api.mercadolibre.com/items/${productId}`
    })
    .then(response => {
      this.setState({ product: response.data });
    })
  }

  fetchDescription = (productId) => {
    return axios({
      method: 'get',
      url: `https://api.mercadolibre.com/items/${productId}/description`
    })
    .then(response => {
      this.setState({ description: response.data.plain_text });
    })
  }

  componentDidMount() {
    setTimeout(() => {
      const productId = this.props.params;
      this.fetchProduct(productId);
      this.fetchDescription(productId);
    });
  }

  render() {
    const { product, description } = this.state;

    return (
      <>
        <section className='list'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='details'>
                  <div className='row'>
                    <div className='col-12 col-md-6'>
                      <img src={product.thumbnail} alt={product.title} />
                    </div>
                    <div className='col-12 col-md-6'>
                      <p>{product.condition} - {product.sold_quantity}</p>
                      <p>{product.title}</p>
                      <p>{product.price}</p>
                      <a href={product.permalink}>Comprar</a>
                    </div>
                  </div>
                  <h3>Descripcíon del producto</h3>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
};

export default Details;
