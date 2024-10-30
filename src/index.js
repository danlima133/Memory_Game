import '../static/css/style.css'
import { Title } from '../components/title/component.js'
import { Layout, Main } from './modules/layout.js'

const title = new Title({
    text: "I'm Component"
})

const main = new Main()
main.addComponent(title.buildComponent())
main.addComponent(title.buildComponent())

const layout = new Layout({
    main: main
})
layout.packLayout()