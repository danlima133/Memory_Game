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

export const Layout = function() {
    this.layout = []
    this.root
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
        this.build(container.getContainer())
    }
    this.deploy = function() {
        this.build(document.body)
    }
    this.build = function(root) {
        this.root = root
        for (let element of this.layout) {
            root.appendChild(element)
        } 
    }
    this.clear = function() {
        this.root = null
        this.layout = []
    } 
    this.desconect = function() {
        if (this.root) {
            for (let element of this.layout) {
                this.root.removeChild(element)
            }
        }
    } 
}
