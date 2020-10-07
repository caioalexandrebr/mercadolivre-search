import React from 'react';

import Logo from '../../img/logo.svg';
import Search from '../../img/search.png';

function Header() {
  return (
    <section className='header'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='header__content'>
              <a className='header__logo' href='/'>
                <img src={Logo} alt='Mercado Livre' />
              </a>
              <form className='header__form'>
                <input className='header__input' placeholder='Buscar produtos, marcas e muito mais…' />
                <button className='header__button'><img src={Search} alt='Search' /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
