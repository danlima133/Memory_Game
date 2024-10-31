export class App {
    constructor(appRoutes) {
        this.routes = appRoutes
    }
}

export const AppRoutes = function() {
    this.routes = {}
    this.addRoute = (route, layout) => {
        this.routes[route] = layout
    }
}