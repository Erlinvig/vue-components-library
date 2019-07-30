<template>
    <div class="table"
         :style="styleTable"
    >
        <table>
            <tr class="row"
                v-for="row in config.rows"
                :style="styles(row)"
                @mouseenter="hoverEffect=true"
                @mouseleave="hoverEffect=false"
            >
                <td class="el" v-for="el in row.content">
                    <div v-if="el.value">
                        <span>{{el.value}}</span>
                    </div>
                    <div v-if="el.component">
                        <div :is="el.component"></div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        props: ['config'],
        components: {

        },
        data() {
            return {
                hoverEffect: false
            }
        },
        methods: {
            styles(row) {
                if (row.style) {
                    let style = {};

                    function init(propertyName, propertyValue) {
                        let property =  propertyValue ? propertyValue : null;
                        if (property) { style[propertyName] = `${property}` }
                    }

                    row.style.forEach((property) => {
                        init(property.name, property.value);
                        if (property.type === 'hover') {

                        }
                    });

                    return style;
                } else {
                    return {}
                }
            }
        },

        computed: {
            styleTable() {
                if (this.config.style) {
                    let style = {};

                    // In development
                    //
                    // function init(propertyName, propertyValue) {
                    //     let property =  propertyValue ? propertyValue : null;
                    //     if (property) { style[propertyName] = `${property}` }
                    // }
                    //
                    // init('backgroundColor', this.config.style.backgroundColor);

                    let borderSize = this.config.style.borderSize ? this.config.style.borderSize : null;
                    let borderColor = this.config.style.borderColor ? this.config.style.borderColor : '#000';
                    let borderRadius = this.config.style.borderRadius ? this.config.style.borderRadius : null;
                    let padding = this.config.style.padding ? this.config.style.padding : null;
                    let backgroundColor = this.config.style.backgroundColor ? this.config.style.backgroundColor : null;

                    if (borderSize) { style.border = `${borderSize}px solid ${borderColor}` }
                    if (borderRadius) { style.borderRadius = `${borderRadius}px` }
                    if (padding) { style.padding = `${padding}px` }
                    if (backgroundColor) { style.backgroundColor = `${backgroundColor}` }

                    // style['transition'] = '.2s';
                    // style['box-shadow'] = '0 0 5px rgba(1,1,1,0.2)';

                    return style;
                } else {
                    return null
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
    .table {
        /*transition: .3s ease;*/
        /*&:hover {*/
            /*background-color: #fff;*/
            /*box-shadow: 0 0 5px rgba(1,1,1,0.2);*/
        /*}*/
    }
    table {
        border-spacing: 0;
        width: 100%;

    }
    .row {
        &:hover {
            background-color: #f8f8f8;
        }
        &:first-child {
            .el {
                font-size: 18px;
                font-weight: 700;
                color: #4e4e4e;
            }

        }
    }
    .el {
        border-bottom: 1px solid #d6d6d6;
        border-right: 1px solid #d6d6d6;
        padding: .5em 1em;
        color: #252525;
        font-size: 16px;
        &:last-child {
            border-right: none;
        }
    }
</style>

