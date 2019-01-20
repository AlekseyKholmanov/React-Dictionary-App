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

    handleAdd = (taskName) =>{
        this.setState({
            todos:
                [...this.state.todos,
                {name:taskName, id:this.state.id, checked:false}],
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

    checkTask = id =>{
        console.log("item "+ id + " is checking")
        const checkedTodos = this.state.todos.map((todo) => {
            if(todo.id===id)
                todo.checked = !todo.checked
            return todo
        })
        this.setState({
            todos:checkedTodos
        })
    }

  render() {
      const checkedItems = this.state.todos.map((t)=>{
          if(t.checked)
              return (<LineComponent taskName={t.name} checked={t.checked} id={t.id} key={t.name+t.id} deleteTask = {this.deleteTask.bind(this)} checkTask = {this.checkTask.bind(this)}/>)
      })

      const unchekedItem = this.state.todos.map((t)=>{
          if(!t.checked)
              return (<LineComponent taskName={t.name} checked={t.checked} id={t.id} key={t.name+t.id} deleteTask = {this.deleteTask.bind(this)} checkTask = {this.checkTask.bind(this)}/>)
      })
    return (
      <div>
          <HeadComponent handleAdd={this.handleAdd.bind(this)}/>
          {unchekedItem}
          {<hr/> && unchekedItem.length > 0 && checkedItems.length > 0}
          {checkedItems}
      </div>
    )
  }
}

export default App;
