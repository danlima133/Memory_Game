import { Game, AUTO } from 'phaser'

let config = {
    type: AUTO,
    width: 384,
    height: 216,
    parent: "game",
    backgroundColor: "#0377fc"
}

let game = new Game(config)