<template>
  <div class="home">
    <div style="width: 500px; margin-bottom: 1em;">
      <v-table :config="configTable"></v-table>
    </div>
  </div>
</template>

<script>
  import vTable from '../components/library/Table/table'
  import test from '../components/library/test'

  export default {
    name: 'home',
    components: {
      vTable
    },
    mounted() {},
    data() {
      return {
        configTable: {
          style: [
            { name: 'backgroundColor', value: '#fdfdfd' },
            { name: 'padding', value: '20px' },
            { name: 'borderWidth', value: '1px' },
            { name: 'borderStyle', value: 'solid' },
            { name: 'borderColor', value: '#d6d6d6' },
            { name: 'borderRadius', value: '5px' },
          ],
          rows: [
            {
              style: [
                { name: 'backgroundColor', value: '#eee' },
              ],
              styleHover: [
                { name: 'backgroundColor', value: '#aaa'}
              ],
              cells: [
                {value: 'Title1'},
                {value: 'Title2'},
                {value: 'Title3'}
              ]
            },
            {
              cells: [
                {value: 'Value1'},
                {value: 'Value2'},
                {component: test}
              ]
            }
          ]
        }
      }
    },
    methods: {}
  }
</script>
