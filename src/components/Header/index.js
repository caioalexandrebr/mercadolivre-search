import React, { useState } from 'react';

import Logo from '../../img/logo.svg';
import Search from '../../img/search.png';

const Header = () => {
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    (value) && (window.location.href = `/${value}`);
  };

  return (
    <section className='header'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-8 offset-md-1'>
            <div className='header__content'>
              <a className='header__logo' href='/'>
                <img src={Logo} alt='Mercado Livre' />
              </a>
              <form className='header__form' onSubmit={handleSubmit}>
                <input className='header__input' type='text' value={value} onChange={event => setValue(event.target.value)} placeholder='Buscar produtos, marcas e muito mais…' />
                <button className='header__button' type='submit'>
                  <img src={Search} alt='Search' />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
