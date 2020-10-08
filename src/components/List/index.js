import React, { Component } from 'react';

const axios = require('axios');

class List extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const response = await axios.get('https://api.mercadolibre.com/sites/MLA/search?q=laptop&limit=4');
    console.log(response.data.results);
    this.setState({ products: response.data.results });
  }

  render() {
    const { products } = this.state;

    return (
      <section className='list'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <ul className='list__content'>
                {products.map(product => (
                  <li key={product.id} className='list__card'>
                    <div className='list__image'>
                      <img src={product.thumbnail} alt={product.title} />
                    </div>
                    <div className='list__description'>
                      <p className='list__price'>$ {product.price}</p>
                      <p className='list__title'>{product.title}</p>
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