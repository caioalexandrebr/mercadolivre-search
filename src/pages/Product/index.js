import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import Details from '../../components/Details';

class Product extends React.Component {
  state = {
    search: [],
  };

  async componentDidMount() {
    const search = this.props.match.params.id;
    this.setState({ search });
  };

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
