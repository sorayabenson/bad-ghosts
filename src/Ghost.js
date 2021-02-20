import React, { Component } from 'react';
import request from 'superagent';
import './Ghost.css';

export default class Ghost extends Component {
    state = {
        ghost: {},
      }

    componentDidMount = async () => {
        const data = await request.get(`https://pacific-dusk-53456.herokuapp.com/ghosts/${this.props.match.params.id}`);

        this.setState({
            ghost: data.body,
        })
    }

    render() {
        const ghost = this.state.ghost;

        return (
            <div className="main">
                <img alt={ghost.name} src={ghost.img} className="img"/>
                <h1 className="h1">{ghost.name}</h1>
                <p className="p">{ghost.description}</p>
            </div>
        )
    }
}
