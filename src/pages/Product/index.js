import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Details from '../../components/Details';

class Product extends React.Component {
  state = {
    search: [],
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ search: id });
  }

  render() {
    const { search } = this.state;

    return (
      <>
        <Breadcrumb />
        <Details params={search} />
      </>
    );
  };
};

export default Product;
