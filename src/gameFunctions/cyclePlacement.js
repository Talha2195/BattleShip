import { player, computer } from "../gameClasses/player"
import { shuffleArray } from "./shufflePlacement"
import { playerShipPlacements, compShipPlacements } from "./shipPlacement"

let shuffledPlayerPlacements = shuffleArray([...playerShipPlacements])
let shuffledComputerPlacements = shuffleArray([...compShipPlacements])

let currentPlacementIndex = 0

export function cycleShipPlacement() {
  player.board.clearBoard()
  computer.board.clearBoard()

  const playerPlacement = shuffledPlayerPlacements[currentPlacementIndex]
  const computerPlacement = shuffledComputerPlacements[currentPlacementIndex]

  playerPlacement.forEach(({ ship, orientation, startRow, startCol }) => {
    player.board.placeShip(ship, orientation, startRow, startCol)
  })

  computerPlacement.forEach(({ ship, orientation, startRow, startCol }) => {
    computer.board.placeShip(ship, orientation, startRow, startCol)
  })

  player.board.printBoard()
  computer.board.printBoard()

  currentPlacementIndex =
    (currentPlacementIndex + 1) % shuffledPlayerPlacements.length

  const start = document.getElementById("start")
  start.disabled = false
}
