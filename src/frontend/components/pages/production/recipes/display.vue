<template>
  <div class="o-data-container">
    <page-table title="Receptury">
      <vue-good-table
        :columns="columns_for_recipe"
        :rows="rows_for_recipe"
        :groupOptions="{enabled: true}"></vue-good-table>
    </page-table>

  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table'
import PageTable from '../../../templates/page-table'
export default {
  name: 'PProduction-recipes',
  components: {PageTable, VueGoodTable},
  data: () => ({
  }),
  computed: {
    columns_for_recipe () {
      let array = []
      let obj = {
        label: 'Numer partii',
        field: 'part_number'
      }
      array.push(obj)
      return array
    },
    rows_for_recipe () {
      let array = []
      let obj = {
        part_number: 'iii'
      }
      array.push(obj)
      return array
    }

  },
  mounted() {
    console.log(this.$router)
    console.log(this.$route)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
