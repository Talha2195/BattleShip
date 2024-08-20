import { started } from "./gameBoardDom/start"
import { Board } from "./gameClasses/gameBoard"
import { Player, player, computer } from "./gameClasses/player"
import { shipOne } from "./gameClasses/ship"
import { randomButton } from "./gameBoardDom/randomButton"
import { Ship } from "./gameClasses/ship"
import { configureShips } from "./gameFunctions/placeRandomShip"
import "./style.css"
const startButton = document.getElementById("start")
startButton.addEventListener("click", started)
const ranButton = document.getElementById("random")
ranButton.addEventListener("click", randomButton)
