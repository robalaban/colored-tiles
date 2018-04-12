import React, { Component } from 'react'
import Board from './modules/board'

class App extends Component {

  constructor() {
    super()
    this.state = {
      rows: 5,
      cols: 5,
      time: {}, 
      seconds: 300,
      gameState: 'idle',
    }
    this.timer = 0;
  }

  handleRows = (value) => {
    this.setState({
      rows: value
    })
  }

  handleCols = (value) => {
    this.setState({
      cols: value
    })
  }

  handleTime = (value) => {
    this.setState({
      seconds: value
    })
  }

  startGame = () => {
    this.setState({
      gameState: 'playing'
    })
    this.startTimer()
  }

  startTimer = () => {
    if (this.timer == 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  // Standard second to h/m/s convertor
  secondsToTime = (secs) => {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  countDown = () => {
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });


    if (seconds == 0) { 
      this.setState({
        gameState: 'lost',
      })
      clearInterval(this.timer);
    }
  }

  checkGameStatus = (board) => {
    let node = board[0][0]
    let status = true

    for (let i = 0; i < board[0].length; i++ ) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] !== node) {
          status = false
          break;
        }
      }
    }

    if (status) {
      this.setState({
        gameState: 'won',
      })
    }

    return status
  }

  render() {
    switch (this.state.gameState) {
      case 'idle': return (
        <div className='settings'>
          <h2> React ColorMatch </h2>
          <input onChange={evt => this.handleRows(evt.target.value)} placeholder='Rows' />
          <input onChange={evt => this.handleCols(evt.target.value)} placeholder='Columns' />
          <input onChange={evt => this.handleTime(evt.target.value)} placeholder='Time in Seconds' />
          <button onClick={this.startGame}>
            Start
          </button>
        </div>
      )
      case 'playing': return (
        <div className='container'> 
          Time Left: {this.state.time.m} : {this.state.time.s}
          <Board 
            rows={parseInt(this.state.rows)} 
            cols={parseInt(this.state.cols)} 
            checkGameStatus={this.checkGameStatus}
          />
        </div>
      )
      case 'won': return (
        <div className='container'> 
          <h2> Congrats you have won! </h2>
        </div>
      )
      case 'lost': return (
        <div className='container'> 
          <h2> Sorry! Your time is up! </h2>
        </div>
      )
    }
  }
}

export default App;
