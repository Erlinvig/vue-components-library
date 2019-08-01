<template>
    <div class="table"
         :style="table.style"
    >
        <table>
            <tr class="row"
                v-for="row in table.rows"
                :style="row.style"
                @mouseenter=""
                @mouseleave=""
            >
                <td class="el" v-for="cell in row.cells"
                    :style="cell.style"
                >
                    <div v-if="cell.value">
                        <span>{{cell.value}}</span>
                    </div>
                    <div v-if="cell.component">
                        <div :is="cell.component"></div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import {Table} from './table.class'

    export default {
        props: {
            config: Object
        },
        components: {},
        created() {
            this.table.init(this.config);
        },
        data() {
            return {
                table: new Table()
            }
        },
        methods: {},
        computed: {}
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

