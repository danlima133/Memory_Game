import { HEADER, MAIN, FOOTER } from '@HTMLelements'

export class Container {
    constructor(element) {
        this.container = element
    }
    addComponent(component) {
        //this.nodes.push(component)
        this.container.element.appendChild(component)
    }
    removeComponent(component) {
        //this.nodes.indexOf(component)
        this.container.element.removeChild(component)
    }
    addContainer(container) {
        this.container.element.appendChild(container.getContainer())
    }
    removeContainer(container) {
        this.container.element.removeChild(container)
    }
    getContainer() {
        return this.container.element
    }
} 

export class Header extends Container {
    constructor(type = null) {
        super(HEADER())
    }
}

export class Main extends Container {
    constructor(type = null) {
        super(MAIN())
    }
}

export class Footer extends Container {
    constructor(type = null) {
        super(FOOTER())
    }
}

export const Layout = function(template = []) {
    this.layout = []
    if (template.length !== 0) {
        let elements = this.layout.concat(template)
        let newLayout = []
        for (let element of elements) {
            console.log(element)
            newLayout.push(element.cloneNode(true)) 
        }
        this.layout = newLayout
    }
    this.connections = []
    this.main = function(main) {
        this.layout.push(main.getContainer())
        return this
    }
    this.header = function(header) {
        this.layout.push(header.getContainer())
        return this
    }
    this.footer = function(footer) {
        this.layout.push(footer.getContainer())
        return this
    }
    this.base = function(container) {
        this.layout.push(container.getContainer())
        return this
    }
    this.bind = function(container) {
        this.connections.push(container)
        return this.build(container.getContainer(), true)
    }
    this.deploy = function() {
        return this.build(document.body)
    }
    this.build = function(root, clone = false) {
        for (let element of this.layout) {
            root.appendChild(clone ? element.cloneNode(true) : element)
        }
        return clone ? new Layout(root.children) : this
    }
    this.clear = function() {
        this.connections = {}
        this.layout = []
    }
    this.remove = function() {
        for (let element of this.layout) {
            element.remove()
        }
    }
    this.desconect = function(...containers) {
        for (let container of containers) {
            let targetIdx = this.connections.indexOf(container)
            let target = this.connections[targetIdx].getContainer()
            target.remove()
        }
    }
    this.getLayout = function() {
        let layout = []
        console.log(this.layout)
        for (let container of this.layout) {
            layout.push(container.getContainer())
        }
        return layout
    }
}
