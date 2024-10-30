export class Component {
    constructor(data) {
        this.data = data
    }
    createComponent() {}
    buildComponent() {
        return this.createComponent()
    }
}