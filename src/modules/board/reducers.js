import { START_GAME, END_GAME, BOARD_CREATED } from './actions'
import { createBoard, calculateBoard } from './config'

export function startGame (settings = {}) {
  return {
    payload: createBoard(settings),
    type: START_GAME
  }
}

export function calculateBoard (cols, rows) {
  return {
    payload: calculateBoard(cols, rows),
    type: BOARD_CREATED
  }
}

export function endGame () {
  return {
    type: END_GAME
  }
}