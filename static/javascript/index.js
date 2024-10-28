import { Game, AUTO } from 'phaser'

let gameSize = {
    width: 384,
    height: 216
}

let config = {
    type: AUTO,
    width: gameSize.width,
    height: gameSize.height,
    parent: "game",
    backgroundColor: "#0377fc",
    scene: {
        preload: preload,
        create: create
    }
}

let game = new Game(config)

function preload() {
    this.load.image("bg", "assets/background1.png")
}

function create() {
    const bg = this.add.image(gameSize.width/2, gameSize.height/2, "bg")
    const title = this.add.text(gameSize.width/2, gameSize.height/2 - 50, "Memory Game", {
        fontFamily: 'sans serif',
        color: "#ffff",
        fontSize: '30px',
        resolution: 1
    })
    title.setOrigin(0.5, 0.5)
}