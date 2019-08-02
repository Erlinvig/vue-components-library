<template>
    <div>
        <div
                :style="getStyle"
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
                style: Object
            }
        },
        computed: {
            getStyle() {
                if (this.config.style) {
                    this.config.style.forEach(style => {
                        this.style[style.name] = style.value;
                    })
                }

                return this.style
            }
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

