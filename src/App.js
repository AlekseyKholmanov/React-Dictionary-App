import React, { Component } from 'react'
import HeadComponent from './Components/HeadComponent'
import LineComponent from './Components/LineComponent'

class App extends Component {
  render() {
    return (
      <div>
          <HeadComponent/>
          <LineComponent/>
      </div>
    );
  }
}

export default App;
