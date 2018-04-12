import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './board.css'

class Board extends Component {
  static propTypes = {
    checkGameStatus: PropTypes.func,
    rows: PropTypes.number,
    cols: PropTypes.number,
  }

  constructor (props) {
    super(props)
    this.state = {
      board: [],
    }
  }

  componentWillMount () {
    const { rows, cols } = this.props
    let y = new Array(cols);
    for (var i = 0; i < cols; i++) {
      y[i] = new Array(rows).fill().map(() => Math.round(Math.random()))
    }

    this.setState({
      board: y,
      endGame: false,
    })
  }

  swapValues = (board, row, col) =>{
    if (board[row][col] == true) {
      board[row][col] = 0
    } else {
      board[row][col] = 1
    }

    return board
  }

  changeColor = (row, col) => {
    let intermBoard = [...this.state.board]
    intermBoard = this.swapValues(intermBoard, row, col)

    if (row + 1 <= intermBoard.length - 1) {
      intermBoard = this.swapValues(intermBoard, row + 1, col)
    }

    if (row - 1 >= 0) {
      intermBoard = this.swapValues(intermBoard, row - 1, col)
    }

    if (col + 1 <= intermBoard[0].length - 1) {
      intermBoard = this.swapValues(intermBoard, row, col + 1)
    }

    if (col - 1 >= 0) {
      intermBoard = this.swapValues(intermBoard, row, col - 1)
    }
    
    this.setState({
      board: intermBoard,
    })

    this.props.checkGameStatus(intermBoard)
  }

  render() {
    const board = this.state.board
    return (
      <div className='board'>
        {board.map((arr, col) => (
          <div className='board--column' key={col}>
            {arr.map((val, row) => (
              <div onClick={() => this.changeColor(col, row)} className={'board--row ' + (val ? 'board--row__red' : 'board--row__black')} key={row}>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board