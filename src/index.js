import '../static/css/style.css'
import { P } from '@HTMLelements'
import * as modules from '@modules/index'
import { Title } from '@components/title/component'

const header = new modules.Header()
const main = new modules.Main()
const footer = new modules.Footer()

const div = new modules.Container(modules.DIV())
const section = new modules.Container(modules.SECTION())
const img = new modules.Container(modules.IMG())
const p = new modules.Container(modules.P())

/*div.addContainer(section)

const simpleLayout = new modules.Layout()
simpleLayout.base(div)

const panel = new modules.Container(modules.DIV())
const layoutPanel = simpleLayout.bind(panel)

const form = new modules.Container(modules.FORM())
const formPanel = simpleLayout.bind(form)
formPanel.footer(footer)
formPanel.bind(img)

const templateLayout = new modules.Layout(simpleLayout.layout)
templateLayout.base(p)
templateLayout.bind(p)

const page = new modules.Layout()
page.base(panel).base(form).base(img).base(p)


//simpleLayout.desconect(form)
//page.remove()*/

const mainPage = new modules.Layout()

header.addComponent(new Title({
    text: 'Header'
}).buildComponent())
main.addComponent(new Title({
    text: 'Main'
}).buildComponent())

div.addComponent(new Title({
    text: 'Footer'
}).buildComponent())
footer.addContainer(div)

mainPage.header(header)
mainPage.main(main)
mainPage.footer(footer)

console.log(mainPage.layout)

const tLayout = new modules.Layout(mainPage.layout)
console.log(tLayout.layout)
tLayout.base(section).base(img)
tLayout.deploy()

/*const appRoutes = new modules.AppRoutes()
appRoutes.addRoute('/home', 'home')
appRoutes.addRoute('/contact', 'contact')

const app = new modules.App(appRoutes)

console.log(appRoutes, app)*/

