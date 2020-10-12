import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import List from '../../components/List';

class Search extends React.Component {
  state = {
    search: [],
  }

  async componentDidMount() {
    const search = this.props.match.params.id;
    this.setState({ search });
  }

  render() {
    const { search } = this.state;

    return (
      <>
        <Breadcrumb />
        <List params={search} />
      </>
    );
  };
};

export default Search;
