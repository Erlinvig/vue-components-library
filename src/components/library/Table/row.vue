<template>
    <tr
            :style="getStyle"
    >
        <cell
                v-for="(cell, index) in row.cells"
                :key="index"
                :styleCellFromTable="styleCellFromTable"
                :styleCellFromRow="row.styleCell"
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
            styleCellFromTable: Array
        },
        data() {
            return {
                style: {}
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
                return this.style
            }
        }
    }
</script>
