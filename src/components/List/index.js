import React, { Component } from 'react';

const axios = require('axios');

class List extends Component {
  state = {
    products: [],
  };

  constructor() {
    super();
    this.fetchUser = this.fetchProducts.bind(this);
  };

  fetchProducts = (params) => {
    return axios({
      method: 'get',
      url: `https://api.mercadolibre.com/sites/MLA/search?q=${params}&limit=4`
    })
    .then(response => {
      this.setState({ products: response.data.results });
    })
  };

  componentDidMount() {
    setTimeout(() => {
      const params = this.props.params;
      this.fetchProducts(params);
    });
  };

  render() {
    const { products } = this.state;

    return (
      <section className='list'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-10 offset-md-1'>
              <ul className='list__content'>
                {products.map(product => (
                  <li key={product.id} className='list__card'>
                    <div className='list__image'>
                      <a href={`p/${product.id}`}>
                        <img src={product.thumbnail} alt={product.title} />
                      </a>
                    </div>
                    <div className='list__description'>
                      <div>
                        <p className='list__price'>$ {parseFloat(product.price).toLocaleString('es-ES', { minimumFractionDigits: 2 })}</p>
                        <a className='list__title' href={`p/${product.id}`}>{product.title}</a>
                      </div>
                      <p className='list__address'>{product.address.state_name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
};

export default List;
