import React from 'react';
import List from '../../components/List';

class Search extends React.Component {
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

export default Search;
