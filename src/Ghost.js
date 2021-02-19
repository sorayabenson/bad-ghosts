import React, { Component } from 'react'
import request from 'superagent'

export default class Ghost extends Component {
    state = {
        ghost: {},
      }

    componentDidMount = async () => {
        const data = await request.get(`https://personal-ghosts.herokuapp.com/ghosts/${this.props.match.params.id}`);

        this.setState({
            ghost: data.body.results,
        })
    }

    render() {
        const ghost = this.state.ghost;

        return (
            <div>
                <img alt={ghost.name} src={ghost.img}/>
                <h1>{ghost.name}</h1>
                <p>{ghost.description}</p>
            </div>
        )
    }
}
