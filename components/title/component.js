import { Component } from '@modules/components.js'
import { panel, title } from './style.module.css'

export class Title extends Component {
    constructor(data) {
        super(data)
    }
    createComponent() {
        this.component = null
        
        this.panel = document.createElement('div')
        this.panel.classList.add(panel)
        this.component = this.panel

        this.title = document.createElement('h1')
        this.title.classList.add(title)
        this.title.innerText = this.data.text
        this.component.appendChild(this.title)

        return this.component
    }
}