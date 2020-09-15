import React, { Component } from 'react'

export default class Entry extends Component {
    render() {
        return (
            <div className="textDanger">
                <p>{this.props.content}</p>
            </div>
        )
    }
    
}

