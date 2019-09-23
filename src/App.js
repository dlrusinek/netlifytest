import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import todosData from './components/TodosData'
import TodoItem from './components/TodoItem'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: todosData
    }

    this.handleCheckbox = this.handleCheckbox.bind(this)
  }

  handleCheckbox(id) {
    this.setState(prevState => {
      const updatedTodo = prevState.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
      return updatedTodo
    })
  }

  render() {
    let item = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleCheckbox={this.handleCheckbox} />)
    return (
      <div class="todo-list">{item}</div>
    )
  }
}

export default App