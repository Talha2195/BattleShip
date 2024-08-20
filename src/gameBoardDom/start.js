// import { loadCellsDom } from "./playerBoardDom"
// import { loadCompCellsDom } from "./compBoardDom"
import { shipOne, shipThree } from "../gameClasses/ship"
import { randomButton } from "./randomButton"
import { player, computer } from "../gameClasses/player"
export let state = false
export function started() {
  if (state === true) {
    player.loadCellsDom("playerBox")
    computer.loadCellsDom("compBox")
    player.board.placeShip(shipOne, "horizontal", 0, 0)
    computer.board.placeShip(shipOne, "horizontal", 0, 0)
    player.board.placeShip(shipThree, "horizontal", 1, 2)
    player.board.printBoard()
    computer.board.printBoard()
    // loadCompCellsDom()
    const random = document.getElementById("random")
    random.disabled = true
  } else {
    console.log("Please hit the random button first!")
  }
}

export function status() {
  state = true
  console.log(state)
}
