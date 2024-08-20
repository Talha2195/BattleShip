import { Player } from "./player"
export class Board {
  constructor(size = 10, highlightCallback) {
    this.size = size
    this.grid = this.createBoard()
    this.highlightCallback = highlightCallback
  }

  createBoard() {
    return Array.from({ length: this.size }, () => Array(this.size).fill("-"))
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
        this.highlightCallback(startRow, startCol + i)
      }
    } else if (orientation === "vertical") {
      for (let i = 0; i < length; i++) {
        this.grid[startRow + i][startCol] = ship
        this.highlightCallback(startRow + i, startCol)
      }
    }
  }
  receiveAttack(coOne, coTwo) {
    if (this.grid[coOne][coTwo] !== "-") {
      this.grid[coOne][coTwo].isHit()
      this.grid[coOne][coTwo] = "T"
    } else {
      this.grid[coOne][coTwo] = "M"
      console.log("You missed!")
    }
  }
}
