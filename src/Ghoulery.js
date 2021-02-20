import React, { Component } from 'react';
import request from 'superagent';
import GhouleryWrapper from './GhouleryWrapper.js';
import './Ghoulery.css';

export default class Ghoulery extends Component {
  state = {
    ghosts: [],
  }

  fetchGhosts = async () => {
    const data = await request.get(`https://pacific-dusk-53456.herokuapp.com/ghosts`);

    this.setState({
      ghosts: data.body,
    })
  }

  componentDidMount = async () => {
    await this.fetchGhosts();
  }

  render() {

    return (
      <div className="main">
        <GhouleryWrapper 
        ghosts={this.state.ghosts} />
      </div>
    )
  }
}
