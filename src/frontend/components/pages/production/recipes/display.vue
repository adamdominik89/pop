<template>
  <div class="o-data-container">
    <page-table title="Receptury">
      <vue-good-table
        :columns="columns_for_recipe"
        :rows="rows_for_recipe"
        ></vue-good-table>
    </page-table>

  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table'
import PageTable from '../../../templates/page-table'
export default {
  name: 'PProduction-recipes',
  components: {PageTable, VueGoodTable},
  props: ['id', 'name'],
  data: () => ({
  }),
  computed: {
    columns_for_recipe () {
      let array = []
      let obj = {
        label: 'Numer partii',
        field: 'partnumber'
      }
      array.push(obj)
      return array
    },
    rows_for_recipe () {
      let array = []
      let obj = {
        partnumber: 'iii'
      }
      array.push(obj)
      return array
    }

  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
