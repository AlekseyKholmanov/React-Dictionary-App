import React, { Component } from 'react'

class LineComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            isChecked: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange() {
        console.log(this.state.isChecked)
    }
    handleDelete = () => {
        this.props.deleteTask(this.props.id)
    }

    render(){
        return (
                <div >
                    <input
                        checked={this.state.isChecked}
                        type={"checkbox"}
                        onChange={this.handleChange}/>
                    {this.props.taskName}
                    <button onClick={this.handleDelete}>удалить</button>
                </div>
            )
    }
}

export default LineComponent