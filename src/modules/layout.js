export class Container {
    constructor(type) {
        this.container = document.createElement(type)
        this.nodes = []
    }
    addComponent(component) {
        //this.nodes.push(component)
        this.container.appendChild(component)
    }
    removeComponent(component) {
        //this.nodes.indexOf(component)
        this.container.removeChild(component)

    }
} 

export class Header extends Container {
    constructor(type = 'header') {
        type = 'header'
        super(type)
    }
}

export class Main extends Container {
    constructor(type = 'main') {
        type = 'main'
        super(type)
    }
}

export class Footer extends Container {
    constructor(type = 'footer') {
        type = 'footer'
        super(type)
    }
}

export class Layout {
    constructor(layout) {
        this.layout = layout
        console.log(this.layout)
    }
    packLayout() {
        if (this.layout.header ==! undefined) 
            document.body.appendChild(this.layout.header.container)
        
        if (this.layout.main ==! undefined) 
            document.body.appendChild(this.layout.main.container)
        
        if (this.layout.footer ==! undefined)
            document.body.appendChild(this.layout.footer.container)
        
    }
} 