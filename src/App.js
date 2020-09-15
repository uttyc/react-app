import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import AddToDo from "./components/AddToDo";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import About from "./components/pages/About";
import Axios from "axios";
import Eksisozluk from "./components/pages/Eksisozluk";

class App extends Component {
  state = {
    todos: [
      
    ],
  };
  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {
      this.setState({
        todos: res.data
      })
    })
  }
  addToDo = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => {
      this.setState({
        todos: [...this.state.todos, res.data],
      });
    })
    
  };
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((t) => {
        if (t.id === id) {
          t.completed = !t.completed;
        }
        return t;
      }),
    });
  };
  delTodo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id !== id)],
      });
    })
    
  };
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddToDo addToDo={this.addToDo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/eksisozluk" component={Eksisozluk} />
          
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
