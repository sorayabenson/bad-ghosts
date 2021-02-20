import React, { Component } from 'react';
import GhouleryItem from './GhouleryItem.js';

export default class GhouleryWrapper extends Component {
    render() {

        const ghostWrapper = this.props.ghosts.map(
            ghost => <GhouleryItem
                    key={ghost.name}
                    ghost={ghost} />
          )

        return (
            <ul>
                {ghostWrapper}
            </ul>
        )
    }
}
