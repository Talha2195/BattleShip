import { Ship, shipOne, shipTwo, shipThree } from "./ship"
export class Board {
  constructor(size = 10) {
    this.size = size
    this.grid = this.createBoard()
  }

  createBoard() {
    return Array.from({ length: this.size }, () => Array(this.size).fill("-")) // Use "X" to represent empty cells
  }

  printBoard() {
    console.log(this.grid.map((row) => row.join(" ")).join("\n"))
  }

  canPlaceShip(ship, orientation, startRow, startCol) {
    const length = ship.length
    if (orientation === "horizontal") {
      if (startCol + length > this.size) return false
      for (let i = 0; i < length; i++) {
        if (this.grid[startRow][startCol + i] !== "-") return false
      }
    } else if (orientation === "vertical") {
      if (startRow + length > this.size) return false
      for (let i = 0; i < length; i++) {
        if (this.grid[startRow + i][startCol] !== "-") return false
      }
    } else {
      throw new Error("Invalid orientation. Use 'horizontal' or 'vertical'.")
    }
    return true
  }

  placeShip(ship, orientation, startRow, startCol) {
    if (!this.canPlaceShip(ship, orientation, startRow, startCol)) {
      console.log("Cannot place ship.")
      return
    }

    const length = ship.length

    if (orientation === "horizontal") {
      for (let i = 0; i < length; i++) {
        this.grid[startRow][startCol + i] = ship
      }
    } else if (orientation === "vertical") {
      for (let i = 0; i < length; i++) {
        this.grid[startRow + i][startCol] = ship
      }
    }
  }
  receiveAttack(coOne, coTwo) {
    if (this.grid[coOne][coTwo] !== "-") {
      this.grid[coOne][coTwo].isHit()
      this.grid[coOne][coTwo] = "T"
    } else {
      console.log("You missed!")
    }
  }
}
const board = new Board()
board.placeShip(shipOne, "vertical", 1, 1)
board.placeShip(shipTwo, "horizontal", 2, 2)
// board.placeShip(shipThree, "vertical", 3, 1)
board.receiveAttack(1, 1)
board.receiveAttack(2, 2)
board.receiveAttack(2, 3)
board.printBoard()
