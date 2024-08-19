import { Board } from "./gameBoard"
export class Player {
  constructor() {
    this.turn = false
    this.board = new Board()
  }
}
export const player = new Player()
export const computer = new Player()
