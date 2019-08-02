<template>
    <td
            :style="getStyle"
    >
        <div v-if="cell.value">
            <div>{{cell.value}}</div>
        </div>
        <div v-if="cell.component">
            <div :is="cell.component"> </div>
        </div>
    </td>
</template>

<script>
    export default {
        props: {
            cell: Object,
            styleCellFromTable: Array,
            styleCellFromRow: Array
        },
        data() {
            return {
                style: {}
            }
        },
        computed: {
            getStyle() {
                if (this.styleCellFromTable && this.cell.isStyleFromTable !== false) {
                    this.styleCellFromTable.forEach(style => {
                        this.style[style.name] = style.value;
                    })
                }

                if (this.styleCellFromRow && this.cell.isStyleFromRow !== false) {
                    this.styleCellFromRow.forEach(style => {
                        this.style[style.name] = style.value;
                    })
                }

                if (this.cell.style) {
                    this.cell.style.forEach(style => {
                        this.style[style.name] = style.value;
                    })
                }

                return this.style
            }
        }
    }
</script>
