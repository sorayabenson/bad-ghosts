import React, { Component } from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';

export default class Ghoulery extends Component {
  state = {
    ghosts: [],
  }

  fetchGhosts = async () => {
    const data = await request.get(`https://personal-ghosts.herokuapp.com/ghosts`);

    this.setState({
      ghosts: data.body.results,
    })
  }

  componentDidMount = async () => {
    await this.fetchGhosts();
  }

  render() {

    const ghosts = this.state.ghosts;

    const ghostWrapper = ghosts.map(
      ghost => 
      {return <Link to={ghost.id}>
          <img alt={ghost.name} src={ghost.img} />
          </Link>
        }
      
    )

    return (
      <div>
        {ghostWrapper}
      </div>
    )
  }
}
