import React, { Component } from 'react'

class LineComponent extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange = () =>{
        this.props.checkTask(this.props.id)
    }
    handleDelete = () => {
        this.props.deleteTask(this.props.id)
    }

    render(){
        return (
                <div >
                    <input
                        checked={this.props.checked}
                        type={"checkbox"}
                        onChange={this.handleChange}/>
                    {this.props.taskName}
                    <button onClick={this.handleDelete}>удалить</button>
                </div>
            )
    }
}

export default LineComponent