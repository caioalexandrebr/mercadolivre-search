import React, { Component } from 'react';

const axios = require('axios');

class Details extends Component {
  state = {
    product: [],
    description: [],
    pictures: []
  };

  constructor() {
    super();
    this.fetchUser = this.fetchProduct.bind(this);
  };

  fetchProduct = (productId) => {
    return axios({
      method: 'get',
      url: `https://api.mercadolibre.com/items/${productId}`
    })
    .then(response => {
      let pictures = [];
      const product = response.data;
      response.data.pictures.map(picture => {
        pictures = [...pictures, picture.url]
        return pictures;
      });
      this.setState({ product, pictures });
    });
  };

  fetchDescription = (productId) => {
    return axios({
      method: 'get',
      url: `https://api.mercadolibre.com/items/${productId}/description`
    })
    .then(response => {
      const description = response.data.plain_text
      this.setState({ description });
    });
  };

  componentDidMount() {
    setTimeout(() => {
      const productId = this.props.params;
      this.fetchProduct(productId);
      this.fetchDescription(productId);
    });
  };

  render() {
    const { product, description, pictures } = this.state;

    const price = parseFloat(product.price).toLocaleString('es-ES', { minimumFractionDigits: 2 });

    return (
      <>
        <section className='details'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-10 offset-md-1'>
                <div className='details__content'>
                  <div className='row'>
                    <div className='col-12 col-md-6'>
                      <img className='details__image details__margin' src={pictures[0]} alt={product.title} />
                    </div>
                    <div className='col-12 col-md-4 offset-md-1'>
                      <p className='details__status'>{product.condition === 'new' ? 'Nuevo' : 'Usado'} - {product.sold_quantity} vendidos</p>
                      <p className='details__title details__margin'>{product.title}</p>
                      <p className='details__price details__margin'>$ {price}</p>
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
