import {UIElement} from '../uielement.class'
import {Cell} from './cell.class'

export class Row extends UIElement {
    constructor() {
        super();
        this.cells = [];
    }

    init(row) {
        if (row.style) {
            row.style.forEach((style) => {
                this.style[style.name] = style.value;
            });
        }

        row.cells.forEach((cell) => {
            let c = new Cell();
            c.init(cell);
            this.cells.push(c)
        });
    }
}

