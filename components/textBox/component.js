import { Component } from '@modules/components.js'
import { DIV, P, SECTION, IMG } from '@HTMLelements'
import { box, text, imagetext, divisor, contentimg } from './style.module.css'
import img from '../../static/assets/background1.png'

export class TextBox extends Component {
    constructor(data) {
        super(data)
    }
    createComponent() {
        let component
        let container = SECTION().element
        let contentDiv = DIV().element
        let imageDiv = DIV().element
        let imageText = IMG().element
        let description = P().element

        container.classList.add(box)
        description.classList.add(text)
        contentDiv.classList.add(divisor)
        imageDiv.classList.add(contentimg)
        imageText.classList.add(imagetext)

        description.style.textAlign = this.data.textAlign
        
        description.innerHTML = this.data.text
        imageText.src = this.data.img
        imageText.alt = 'Imagem da caixa de texto'

        imageDiv.appendChild(imageText)
        
        contentDiv.appendChild(imageDiv)
        contentDiv.appendChild(description)
        
        container.appendChild(contentDiv)
        
        component = container

        return component
    }
    validatedData(data) {
        if (typeof data.textAlign !== 'string')
            data.textAlign = 'center'

        if (typeof data.img !== 'string')
            data.img = img
    }
}