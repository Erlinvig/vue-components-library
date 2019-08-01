import {UIElement} from '../uielement.class'
import {Row} from './row.class'

export class Table extends UIElement {
    constructor() {
        super();
        this.rows = [];
    }

    init(config) {
        if (config.style) {
            config.style.forEach((style) => {
                this.style[style.name] = style.value;
            });
        }

        config.rows.forEach((row) => {
            let r = new Row();
            r.init(row);
            this.rows.push(r)
        });
    }
}

