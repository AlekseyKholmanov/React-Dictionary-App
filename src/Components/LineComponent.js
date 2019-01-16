import React, { Component } from 'react'

class LineComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            isChecked: false,
            value: 'text'
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(this.state.isChecked)
        this.state.isChecked ? this.setState({value: 'unchecked'}):this.setState({value: 'checked'})
        this.setState({isChecked: !this.state.isChecked})
    }


    render(){
        return (
            <div>
                <div>
                    <input checked={this.state.isChecked} type={"checkbox"} onChange={this.handleChange}/>
                    <text>{this.state.value}</text>
                    <button>удалить</button>
                </div>
            </div>
            )
    }
}

export default LineComponent