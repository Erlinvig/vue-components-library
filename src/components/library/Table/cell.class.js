import {UIElement} from '../uielement.class'

export class Cell extends UIElement {
    constructor() {
        super();
        this.value = null;
        this.component = null;
    }

    init(cell) {
        if (cell.style) {
            cell.style.forEach((style) => {
                this.style[style.name] = style.value;
            });
        }

        if (cell.value) {
            this.value = cell.value;
        }
        if (cell.component) {
            this.component = cell.component;
        }
    }
}
