<template>
    <td
            :style="getStyle"
            @mouseenter="isHover = true"
            @mouseleave="isHover = false"
    >
        <div v-if="cell.value">
            <div>{{cell.value}}</div>
        </div>
        <div v-if="cell.component">
            <div :is="cell.component"> </div>
        </div>
        <div v-if="cell.template">
            <div v-html="cell.template"></div>
        </div>
    </td>
</template>

<script>
    export default {
        props: {
            cell: Object,
            styleCellFromTable: Array,
            styleCellFromRow: Array,
            styleCellFromTableHover: Array,
            styleCellFromRowHover: Array
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

                if (this.styleCellFromTableHover && this.isHover) {
                    this.styleCellFromTableHover.forEach(style => {
                        this.styleHover[style.name] = style.value;
                    })
                }

                if (this.styleCellFromRowHover && this.isHover) {
                    this.styleCellFromRowHover.forEach(style => {
                        this.styleHover[style.name] = style.value;
                    })
                }

                if (this.cell.styleHover && this.isHover) {
                    this.cell.styleHover.forEach(style => {
                        this.styleHover[style.name] = style.value;
                    })
                }

                let styleHover = this.isHover ? this.styleHover : {};

                return [this.style, styleHover]
            }
        }
    }
</script>
