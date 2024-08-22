import { Player } from "./player"
import { Ship } from "./ship"
export class Board {
  constructor(size = 10, box) {
    this.size = size
    this.grid = this.createBoard()
    this.box = box
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
    const block = "block"
    if (orientation === "horizontal") {
      for (let i = 0; i < length; i++) {
        this.grid[startRow][startCol + i] = ship
        this.highLight(startRow, startCol + i, block)
      }
    } else if (orientation === "vertical") {
      for (let i = 0; i < length; i++) {
        this.grid[startRow + i][startCol] = ship
        this.highLight(startRow + i, startCol, block)
      }
    }
  }
  highLight(row, col, pass) {
    const cell = document.querySelector(
      `#${this.box} .board-cell[data-row="${row}"][data-col="${col}"]`
    )
    if (cell) {
      if (pass == "block") {
        cell.classList.add("highLighted")
      } else if (pass == "dot") {
        cell.classList.add("hit")
        cell.classList.remove("highLighted")
      }
    } else {
      console.log(`Cell not found at Row ${row}, Col ${col}`)
    }
  }
  receiveAttack(coOne, coTwo) {
    const dot = "dot"
    const cell = this.grid[coOne][coTwo]
    if (cell instanceof Ship) {
      cell.isHit()
      this.highLight(coOne, coTwo, dot)
      this.grid[coOne][coTwo] = "T"
    } else if (cell === "M" || cell === "T") {
      console.log("Grid cell already marked!")
    } else {
      this.grid[coOne][coTwo] = "M"
    }
  }
  clearBoard() {
    this.grid = this.createBoard()
  }
}
