import React, { useState, useEffect } from 'react';
const axios = require('axios');

const Details = (props) => {
  const [product, setProduct] = useState([]);
  const [description, setDescription] = useState([]);
  const [pictures, setPictures] = useState([]);

  const fetchProduct = async (productId) => {
    const response = await axios.get(`https://api.mercadolibre.com/items/${productId}`);

    let resPictures = [];

    response.data.pictures.map(picture => {
      resPictures = [...resPictures, picture.url]
      return resPictures;
    });

    setProduct(response.data);
    setPictures(resPictures);

    return response;
  };

  const fetchDescription = async (productId) => {
    const response = await axios.get(`https://api.mercadolibre.com/items/${productId}/description`);

    const description = response.data.plain_text
    setDescription(description);

    return response;
  };

  useEffect(() => {
    const productId = props.params;
    fetchProduct(productId);
    fetchDescription(productId);
  }, [props.params]);

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

export default Details;
