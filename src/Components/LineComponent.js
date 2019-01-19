import React, { Component } from 'react'

class LineComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            isChecked: false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        console.log(this.state.isChecked)
    }


    render(){
        return (
            <div>
                <div>
                    <input
                        checked={this.state.isChecked}
                        type={"checkbox"}
                        onChange={this.handleChange}/>
                    {this.props.taskName}
                    <button>удалить</button>
                </div>
            </div>
            )
    }
}

export default LineComponent