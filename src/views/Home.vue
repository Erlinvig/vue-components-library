<template>
  <div class="home">
    <div style="width: 50%; margin-bottom: 1em;">
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
            { name: 'transition', value: '.35s'}
          ],
          styleRow: [
            { name: 'borderBottom', value: '1px solid #d6d6d6' },
            { name: 'height', value: '70px' }
          ],
          styleRowHover: [
              { name: 'backgroundColor', value: '#d6d6d6' },
          ],
          styleCell: [
            { name: 'padding', value: '10px' },
            { name: 'color', value: '#333' }
          ],
          styleCellHover: [
              { name: 'backgroundColor', value: '#d0f4e3' },
          ],
          styleHover: [
            { name: 'box-shadow', value: '0 0 5px rgba(0,0,0,0.3)' }
          ],
          rows: [
            {
              style: [
                { name: 'backgroundColor', value: '#f4f4f4' },
              ],
              styleCell: [
                {name: 'font-weight', value: '600'}
              ],
              styleCellHover: [
                { name: 'backgroundColor', value: '#afccbf' },
              ],
              isStyleFromTable: false,
              cells: [
                {style: [{ name: 'color', value: 'green' }], value: 'Title1', isStyleFromTable: false, isStyleFromRow: false},
                {value: 'Title2'},
                {value: 'Title3'},
                {template: `<span>Title4</span>`}
              ]
            },
            {
              cells: [
                {value: 'Value1' },
                {value: 'Value2'},
                {component: test},
                {template: `<button>Кнопка</button>`}
              ]
            }
          ]
        }
      }
    },
    methods: {},
    computed: {}
  }
</script>
