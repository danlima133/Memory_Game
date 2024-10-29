import imgBackground from '../static/assets/background1.png'
import '../static/css/style.css'

const title = document.getElementsByTagName("title")[0]
title.innerHTML = "Memory Game"

const h1 = document.createElement("h1")
h1.innerHTML = "Memory Game"

const background = document.createElement("img")
background.src = imgBackground

const description = document.createElement("p")
description.innerHTML = "Um jogo da memória feito com o framework PhaserJS. Projeto com intuito de praticar Javascript, Webpack e Phaser."

document.getElementsByTagName("body")[0].appendChild(h1)
document.getElementsByTagName("body")[0].appendChild(background)
document.getElementsByTagName("body")[0].appendChild(description)