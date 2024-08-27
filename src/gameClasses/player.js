import { Board } from "./gameBoard"
import { Ship } from "./ship"
export class Player {
  constructor(box) {
    this.turn = false
    this.box = box
    this.board = new Board(10, box)
  }

  loadCellsDom() {
    const cellsDiv = document.getElementById(this.box)

    cellsDiv.innerHTML = ""

    this.board.grid.forEach((row, rowIndex) => {
      const rowDiv = document.createElement("div")
      rowDiv.className = "board-row"

      row.forEach((cell, colIndex) => {
        const cellDiv = document.createElement("div")
        cellDiv.className = "board-cell"
        cellDiv.dataset.row = rowIndex
        cellDiv.dataset.col = colIndex
        rowDiv.appendChild(cellDiv)
      })

      cellsDiv.appendChild(rowDiv)
    })
  }

  setupCellListeners() {
    const cellDivs = document.querySelectorAll(`#${this.box} .board-cell`)

    cellDivs.forEach((cell) => {
      cell.addEventListener("click", this.handlePlayerMove.bind(this))
    })
  }

  toggleCell(cell) {
    cell.classList.add("cell-active")
  }

  handlePlayerMove(event) {
    const row = event.target.dataset.row
    const col = event.target.dataset.col
    let attack = this.board.receiveAttack(row, col)
    this.board.printBoard()
    this.toggleCell(event.target)
    console.log(`Cell clicked: Row ${row}, Col ${col}`)
    if (attack == "marked") {
      console.log("Try again")
    } else {
      player.board.computerMove()
    }
  }

  resetShips() {
    Object.values(playerShips).forEach((ship) => {
      ship.hit = 0
      ship.sunk = false
    })

    Object.values(computerShips).forEach((ship) => {
      ship.hit = 0
      ship.sunk = false
    })

    Ship.shipCount = 10
  }
}
export const player = new Player("playerBox")
export const computer = new Player("compBox")

export const playerShips = {
  shipOne: new Ship(1),
  shipTwo: new Ship(2),
  shipThree: new Ship(3),
  shipFour: new Ship(4),
  shipFive: new Ship(5),
}

export const computerShips = {
  shipOne: new Ship(1),
  shipTwo: new Ship(2),
  shipThree: new Ship(3),
  shipFour: new Ship(4),
  shipFive: new Ship(5),
}
