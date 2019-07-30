<template>
  <div class="home">
    <div style="width: 500px; margin-bottom: 1em;">
      <v-table :config="configTable" :test="test"></v-table>
    </div>
  </div>
</template>

<script>
  import vTable from '../components/library/table'
  import test from '../components/library/test'
  export default {
    name: 'home',
    components: {
      vTable
    },
    data() {
      return {
        configTable: {
          style: {
            borderSize: 1,
            borderColor: '#d6d6d6',
            borderRadius: 5,
            padding: 20,
            backgroundColor: '#fdfdfd'
          },
          rows: [
            {
              style: [
                { name: 'backgroundColor', value: '#eee' },

              ],
              styleHover: [
                { name: 'backgroundColor', value: '#aaa'}
              ],
              content: [
                {value: 'Title1'},
                {value: 'Title2'},
                {value: 'Title3'}
              ]
            },
            {
              content: [
                {value: 'Value1'},
                {value: 'Value2'},
                {component: test}
              ]
            }
          ]
        }
      }
    }
  }
</script>
