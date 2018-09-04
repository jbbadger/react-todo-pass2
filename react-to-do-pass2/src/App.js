import React, { Component } from 'react';
import './App.css';
import ToDo from './component/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'order food', isCompleted: true },
        { description: 'take out trash', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: true }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
          )}
        </ul>
      </div>
    );
  }
}

export default App;
