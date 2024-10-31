import '../static/css/style.css'
import { P } from '@HTMLelements'
import * as modules from '@modules/index'
import { Title } from '@components/title/component'

const header = new modules.Header()
const main = new modules.Main()
const footer = new modules.Footer()

const div = new modules.Container(modules.DIV())
const section = new modules.Container(modules.SECTION())

div.addContainer(section)

const simpleLayout = new modules.Layout()
simpleLayout.base(div)

const panel = new modules.Container(modules.DIV())
simpleLayout.bind(panel)

//const form = new modules.Container(modules.FORM())
//simpleLayout.bind(form)

const page = new modules.Layout()
page.base(panel)
page.deploy()

/*const appRoutes = new modules.AppRoutes()
appRoutes.addRoute('/home', 'home')
appRoutes.addRoute('/contact', 'contact')

const app = new modules.App(appRoutes)

console.log(appRoutes, app)*/