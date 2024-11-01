import '../static/css/style.css'
import { P } from '@HTMLelements'
import * as modules from '@modules/index'
import { Title } from '@components/title/component'
import { TextBox } from '@components/textBox/component'
import bg from '@static/assets/background2.png'

const header = new modules.Header()
const main = new modules.Main()

const mainTitle = new Title({
    text: 'Memory Game'
}).buildComponent()

const descriptionGame = new TextBox({
    text: 'Um jogo da memória feito com o framework PhaserJS.',
    textAlign: 'left',
    img: bg
}).buildComponent()

header.addComponent(mainTitle)
main.addComponent(descriptionGame)

const view = new modules.Layout()

view.header(header)
view.main(main)

view.deploy()

