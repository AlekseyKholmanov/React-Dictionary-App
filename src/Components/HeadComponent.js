import React, { Component } from 'react'

class HeadComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            taskName:''
        }

    }
    handleChange = e => {
        console.log(e.target.value)
        this.setState(
            {
                taskName: e.target.value
            }
        )
    }

    handleClick = () => {
        console.log("clicked")
        this.props.handleAdd(this.state.taskName)
        this.setState({
            taskName: ''
        })
    }

    render(){
        return(
            <div className={"LineComponent"} >
                <input type={"text"} onChange={this.handleChange} value={this.state.taskName}></input>
                <button onClick={this.handleClick}>Добавить</button>
            </div>
        )
    }

}
export default HeadComponent