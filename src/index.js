import { started } from "./gameBoardDom/start"
import { randomButton } from "./gameBoardDom/randomButton"
import { resetButton } from "./gameBoardDom/reset"
import "./style.css"
const screen = document.getElementById("screenText")
screen.innerHTML = "Press Random to pick a configuration!"
const startButton = document.getElementById("start")
startButton.addEventListener("click", started)
const ranButton = document.getElementById("random")
ranButton.addEventListener("click", randomButton)
const reButton = document.getElementById("reset")
reButton.addEventListener("click", resetButton)
const start = document.getElementById("start")
start.disabled = true
const reset = document.getElementById("reset")
reset.disabled = true
