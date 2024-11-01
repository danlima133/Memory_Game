export class Component {
    constructor(data) {
        this.data = data
        this.validatedData(this.data)
    }
    createComponent() {}
    validatedData(data) {}
    buildComponent() {
        return this.createComponent()
    }
}