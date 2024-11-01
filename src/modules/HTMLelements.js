class Element {
    constructor(element) {
        this.id = element
        this.element = document.createElement(element)
    }
}
export const DIV = () => new Element('div');
export const SPAN = () => new Element('span');
export const P = () => new Element('p');
export const H1 = () => new Element('h1');
export const H2 = () => new Element('h2');
export const H3 = () => new Element('h3');
export const H4 = () => new Element('h4');
export const H5 = () => new Element('h5');
export const H6 = () => new Element('h6');
export const HEADER = () => new Element('header');
export const FOOTER = () => new Element('footer');
export const SECTION = () => new Element('section');
export const ARTICLE = () => new Element('article');
export const ASIDE = () => new Element('aside');
export const MAIN = () => new Element('main');
export const NAV = () => new Element('nav');
export const UL = () => new Element('ul');
export const OL = () => new Element('ol');
export const LI = () => new Element('li');
export const A = () => new Element('a');
export const IMG = () => new Element('img');
export const BUTTON = () => new Element('button');
export const INPUT = () => new Element('input');
export const FORM = () => new Element('form');
export const LABEL = () => new Element('label');
export const TABLE = () => new Element('table');
export const TR = () => new Element('tr');
export const TD = () => new Element('td');
export const TH = () => new Element('th');
export const THEAD = () => new Element('thead');
export const TBODY = () => new Element('tbody');
export const SELECT = () => new Element('select');
export const OPTION = () => new Element('option');
export const TEXTAREA = () => new Element('textarea');
export const CANVAS = () => new Element('canvas');

