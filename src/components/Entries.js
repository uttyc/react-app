import React, { Component } from 'react'
import Entry from './Entry'
export default class Entries extends Component {
    render() {
        return this.props.entries.map((entry) => 
        <Entry key={entry.id} content={entry.content} />);
      
    }
}
