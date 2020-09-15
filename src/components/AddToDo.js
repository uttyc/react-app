import React, { Component } from 'react'
import PropTypes from 'prop-types';
export class AddToDo extends Component {
    state = {
        title: ''
    }
    onChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })  
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addToDo(this.state.title);
        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{margin: '10px'}}>
                <input 
                    type="text"
                    name="title"
                    style={{padding: '5px'}} 
                    placeholder="Whatcha gonna do?"
                    value={this.state.title}
                    onChange={this.onChange} /> {' '}
                <input 
                    type="submit"
                    value="Submit" />
            </form>
        )
    }
}
AddToDo.propTypes = {
    addToDo: PropTypes.func.isRequired
}
export default AddToDo
