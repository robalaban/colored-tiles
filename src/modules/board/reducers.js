import { START_GAME, END_GAME } from './actions'
import createBoard from './config'

export function startGame (settings = {}) {
  return {
    payload: createBoard(settings),
    type: START_GAME
  }
}

export function endGame () {
  return {
    type: END_GAME
  }
}