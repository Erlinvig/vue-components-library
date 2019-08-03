<template>
    <div>
        <div
                :style="getStyle"
                @mouseenter="isHover = true"
                @mouseleave="isHover = false"
        >
            <table>
                <row
                        v-for="(row, index) in config.rows"
                        :key="index"
                        :styleRowFromTable="config.styleRow"
                        :styleCellFromTable="config.styleCell"
                        :row="row">
                </row>
            </table>
        </div>
    </div>
</template>

<script>
    import row from './row'
    export default {
        props: {
            config: {}
        },
        components: {
            row
        },
        data() {
            return {
                style: {},
                styleHover: {},
                isHover: false
            }
        },
        methods: {},
        computed: {
            getStyle() {
                if (this.config.style) {
                    this.config.style.forEach(style => {
                        this.style[style.name] = style.value;
                    })
                }

                if (this.config.styleHover && this.isHover) {
                    this.config.styleHover.forEach(style => {
                        this.styleHover[style.name] = style.value;
                    })
                }

                let styleHover = this.isHover ? this.styleHover : {};

                return [this.style, styleHover]
            },
        }
    }
</script>

<style lang="scss" scoped>
    table {
        border-collapse: collapse;
        border-spacing: 0;
        width: 100%;
    }
</style>

