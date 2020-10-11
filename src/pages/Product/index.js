import React from 'react';
import List from '../../components/Details';

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
      <List params={search} />
    );
  };
};

export default Product;
