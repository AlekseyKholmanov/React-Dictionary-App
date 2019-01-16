import React, { Component } from 'react'

class HeadComponent extends Component {
    render(){
        return(
            <div className={"LineComponent"}>
                <div>
                    <input type={"text"}></input>
                </div>
                <button>Добавить</button>
            </div>
        )
    }
}
export default HeadComponent