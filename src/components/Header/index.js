import React from 'react';

import Logo from '../../img/logo.svg';
import Search from '../../img/search.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    window.location.href = this.state.value;
  }

  render() {
    return (
      <section className='header'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='header__content'>
                <a className='header__logo' href='/'>
                  <img src={Logo} alt='Mercado Livre' />
                </a>
                <form className='header__form' onSubmit={this.handleSubmit}>
                  <input className='header__input' type="text" value={this.state.value} onChange={this.handleChange} placeholder='Buscar produtos, marcas e muito mais…' />
                  <button className='header__button' type="submit"><img src={Search} alt='Search' /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
