import React, { Component } from 'react'
import Board from './modules/board'
import Settings from './modules/settings'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rows: 5,
      cols: 5,
      time: 300
    }
  }

  handleRows = () => {

  }

  handleCols = () => {
    
  }

  handleTime = () => {
    
  }
  render() {
    return (
      <div className="App">
        {/* <Board /> */}
        <div className='settings'>
          <input onChange={this.handleRows} placeholder='Rows' />
          <input onChange={this.handleCols} placeholder='Columns' />
          <input onChange={this.handleTime} placeholder='Time' />
        </div>
      </div>
    );
  }
}

export default App;
