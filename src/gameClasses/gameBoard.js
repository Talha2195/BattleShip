import { player, computer } from "./player"
import { Ship } from "./ship"
export class Board {
  constructor(size = 10, box) {
    this.size = size
    this.grid = this.createBoard()
    this.box = box
    this.shipCount = 0
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

    this.incrementShipCount()
  }

  receiveAttack(row, col) {
    const dot = "dot"
    const miss = "miss"
    const cell = this.grid[row][col]

    if (cell instanceof Ship) {
      cell.isHit()
      if (cell.isSunk()) {
        this.decrementShipCount()
        this.highLight(row, col, dot)
        this.grid[row][col] = "T"
        console.log(this.shipCount)
      } else {
        this.highLight(row, col, dot)
        this.grid[row][col] = "T"
      }
    } else if (cell === "M" || cell === "T") {
      console.log("Grid cell already marked!")
      return "marked"
    } else {
      this.grid[row][col] = "M"
      this.highLight(row, col, miss)
    }
  }

  highLight(row, col, type) {
    const cell = document.querySelector(
      `#${this.box} .board-cell[data-row="${row}"][data-col="${col}"]`
    )
    if (cell) {
      if (type === "block") {
        if (this.box === "playerBox") {
          cell.classList.add("highLighted")
        }
      } else if (type === "dot") {
        cell.classList.add("hit")
        cell.classList.remove("highLighted")
      } else if (type === "miss") {
        cell.classList.add("miss")
        cell.classList.remove("highLighted")
      }
    } else {
      console.log(`Cell not found at Row ${row}, Col ${col}`)
    }
  }

  clearBoard() {
    this.grid = this.createBoard()
    this.shipCount = 0
  }

  computerMove() {
    let row, col
    do {
      row = Math.floor(Math.random() * this.size)
      col = Math.floor(Math.random() * this.size)
    } while (this.grid[row][col] === "M" || this.grid[row][col] === "T")

    player.board.receiveAttack(row, col)
    player.board.printBoard
  }
  incrementShipCount() {
    this.shipCount++
  }
  decrementShipCount() {
    if (this.shipCount > 0) {
      this.shipCount--
      this.checkGameStatus()
    }
  }

  checkGameStatus() {
    if (this.shipCount <= 0) {
      if (this.box === "playerBox") {
        computer.board.gameEnd("Computer")
        player.board.disableAllCells()
      } else if (this.box === "compBox") {
        player.board.gameEnd("Player")
        computer.board.disableAllCells()
      }
    } else {
      console.log(`Ships remaining: ${this.shipCount}`)
    }
  }

  disableAllCells() {
    const cellDivs = document.querySelectorAll(`#${this.box} .board-cell`)
    cellDivs.forEach((cell) => {
      cell.style.pointerEvents = "none"
      cell.classList.add("disabled")
    })
  }

  gameEnd(winner) {
    let screen = document.getElementById("screenText")
    screen.innerHTML = `Game Over, ${winner} wins!`
    this.disableAllCells()
  }
}
