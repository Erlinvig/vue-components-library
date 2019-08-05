<template>
    <tr
            :style="getStyle"
            @mouseenter="isHover = true"
            @mouseleave="isHover = false"
    >
        <cell
                v-for="(cell, index) in row.cells"
                :key="index"
                :styleCellFromTable="styleCellFromTable"
                :styleCellFromRow="row.styleCell"
                :styleCellFromTableHover="styleCellFromTableHover"
                :styleCellFromRowHover="row.styleCellHover"
                :cell="cell"
        >
        </cell>
    </tr>
</template>

<script>
    import cell from './cell'

    export default {
        components: {
            cell
        },
        props: {
            row: Object,
            styleRowFromTable: Array,
            styleRowFromTableHover: Array,
            styleCellFromTable: Array,
            styleCellFromTableHover: Array
        },
        data() {
            return {
                isHover: false,
                style: {},
                styleHover: {}
            }
        },
        computed: {
            getStyle() {
                if (this.styleRowFromTable && this.row.isStyleFromTable !== false) {
                    this.styleRowFromTable.forEach(style => {
                        this.style[style.name] = style.value;
                    })
                }

                if (this.row.style) {
                    this.row.style.forEach(style => {
                        this.style[style.name] = style.value;
                    })
                }

                if (this.styleRowFromTableHover && this.isHover) {
                    this.styleRowFromTableHover.forEach(style => {
                        this.styleHover[style.name] = style.value;
                    })
                }

                if (this.row.styleHover && this.isHover) {
                    this.row.styleHover.forEach(style => {
                        this.styleHover[style.name] = style.value;
                    })
                }

                let styleHover = this.isHover ? this.styleHover : {};

                return [this.style, styleHover]
            }
        }
    }
</script>
