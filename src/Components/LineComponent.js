import React, { Component } from 'react'

class LineComponent extends Component {
    constructor(props) {
        super(props)
    }

    handleChange = () =>{
        this.props.checkTask(this.props.id)
    }
    handleDelete = () => {
        this.props.deleteTask(this.props.id)
    }

    render(){
        return (
                <div className={"todoItem"}>
                    <input
                        checked={this.props.checked}
                        type={"checkbox"}
                        onChange={this.handleChange}/>
                    <div className = {this.props.checked ? "lineThroughtText" : ""}>{this.props.taskName}</div>
                    <button onClick={this.handleDelete}>удалить</button>
                </div>
            )
    }
}

export default LineComponent