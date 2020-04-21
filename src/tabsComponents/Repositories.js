import React from 'react';
import PropTypes from 'prop-types';

class Repositories extends React.Component {
  constructor() {
    super();

    this.state = {
      repos: [],
    };
  }

  componentDidMount() {
    this._fetchData();
  }

  async _fetchData() {
    let result = await fetch(`https://api.github.com/users/${this.props.userId}/repos`);
    let repos = await result.json();

    this.setState({
      repos,
    });
  }

  render() {
    return (
      <div className='row'>
        {
          this.state.repos.map((repo) => <div className='row' key={repo.id}>{repo.full_name}</div>)
        }
      </div>
    );
  }
}

Repositories.propTypes = {
  userId: PropTypes.string,
};

export default Repositories;
