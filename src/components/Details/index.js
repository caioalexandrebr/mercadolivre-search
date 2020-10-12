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
      console.log(response.data);
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
        <section className='details'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='details__content'>
                  <div className='row'>
                    <div className='col-12 col-md-6'>
                      <img className='details__image' src={product.thumbnail} alt={product.title} />
                    </div>
                    <div className='col-12 col-md-3 offset-md-1'>
                      <p className='details__status'>{product.condition === 'new' ? 'Nuevo' : 'expr2'} - {product.sold_quantity} vendidos</p>
                      <p className='details__title details__margin'>{product.title}</p>
                      <p className='details__price details__margin'>$ {product.price}</p>
                      <a className='button button--fluid details__margin' href={product.permalink}>Comprar</a>
                    </div>
                    <div className='col-12 col-md-7'>
                      <p className='details__description details__description--title details__margin'>Descripcíon del producto</p>
                      <p className='details__description details__margin--reset'>{description}</p>
                    </div>
                  </div>
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
