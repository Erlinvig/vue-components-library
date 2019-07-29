<template>
  <div class="home">
    <div style="width: 500px; margin-bottom: 1em;">
      <v-table :config="configTable"></v-table>
    </div>
  </div>
</template>

<script>
  import vTable from '../components/library/table'
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
          content: [
            {
              row: [
                {value: 'Title1'},
                {value: 'Title2'},
                {value: 'Title3'}
              ]
            },
            {
              row: [
                {value: 'Value1'},
                {value: 'Value2'},
                {value: 'Value3'}
              ]
            }
          ]
        }
      }
    }
  }
</script>
