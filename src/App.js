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
    }

  render() {
      const todoItems = this.state.todos.map((t)=>
          (<LineComponent
              taskName={t.name}
              key={t.id}
              addItem ={this.addItem()}/>
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
