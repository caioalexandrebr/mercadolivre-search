import React from 'react';

function Breadcrumb() {
  return (
    <section className='breadcrumb'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-10 offset-md-1'>
            <span><a href='/'>Informática</a></span>
            <span><a href='/'>Acessórios para PC Gaming</a></span>
            <span><a href='/'>Fones</a></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
