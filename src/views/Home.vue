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
          styleRow: [
            { name: 'borderBottom', value: '1px solid #d6d6d6' },
            { name: 'height', value: '70px' }
          ],
          styleCell: [
            { name: 'padding', value: '10px' },
            { name: 'color', value: '#333' }
          ],
          rows: [
            {
              style: [
                { name: 'backgroundColor', value: '#f4f4f4' },
              ],
              styleCell: [
                {name: 'font-weight', value: '600'}
              ],
              isStyleFromTable: false,
              styleHover: [
                { name: 'backgroundColor', value: '#aaa'}
              ],
              cells: [
                {style: [{ name: 'color', value: 'green' }], value: 'Title1', isStyleFromTable: false, isStyleFromRow: false},
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
