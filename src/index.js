import { started } from "./gameBoardDom/start"
import { Board } from "./gameClasses/gameBoard"
import { player } from "./gameClasses/player"
import { shipOne } from "./gameClasses/ship"
import "./style.css"
const startButton = document.getElementById("start")
startButton.addEventListener("click", started)
player.board.placeShip(shipOne, "horizontal", 0, 0)
player.board.printBoard()
