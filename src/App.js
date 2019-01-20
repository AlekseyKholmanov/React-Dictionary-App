import React, { Component } from 'react'
import HeadComponent from './Components/HeadComponent'
import LineComponent from "./Components/LineComponent";

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            todos:[],
            id: 0
        }
    }

    addItem = () => {
        console.log('Hello Add Item')
    }

    handleAdd = (taskName) =>{
        console.log( 'from header')
        this.setState({
            todos:[...this.state.todos, {name:taskName, id:this.state.id}],
            id: this.state.id + 1
        })
        console.log(this.state.id)
    }

    deleteTask = id =>{
        console.log( 'handle delete' + id)
        const remainingToDos = this.state.todos.filter((todo) => {
           return todo.id !== id
        });
        this.setState({
            todos: remainingToDos
        })
    }

  render() {
      const todoItems = this.state.todos.map((t)=>
          (<LineComponent
              taskName={t.name}
              id={t.id}
              key={t.name+t.id}
              addItem ={this.addItem()}
              deleteTask = {this.deleteTask.bind(this)}/>
          )
      )
    return (
      <div>
          <HeadComponent handleAdd={this.handleAdd.bind(this)}/>
          {todoItems}
      </div>
    )
  }
}

export default App;
