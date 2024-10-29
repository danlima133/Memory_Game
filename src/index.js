import imgBackground from '../static/assets/background1.png'
import { title, background, text } from '../static/css/style.module.css'
import '../static/css/main.css'

const h1 = document.createElement("h1")
h1.innerHTML = "Memory Game"
h1.classList.add(title)

const bg = document.createElement("img")
bg.src = imgBackground
bg.classList.add(background)

const description = document.createElement("p")
description.innerHTML = "Um jog da memória feito com o framework PhaserJS. Projeto com intuito de praticar Javascript, Webpack e Phaser."
description.classList.add(text)

document.getElementsByTagName("body")[0].appendChild(h1)
document.getElementsByTagName("body")[0].appendChild(bg)
document.getElementsByTagName("body")[0].appendChild(description)