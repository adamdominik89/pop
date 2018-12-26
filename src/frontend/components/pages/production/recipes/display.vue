<template>
  <div class="o-data-container">
    <page-table title="Receptury">
      {{id}}
      <vue-good-table
        :columns="get_columns"
        :rows="rows_for_recipe"
        ></vue-good-table>
    </page-table>

  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table'
import PageTable from '../../../templates/page-table'
import {mapGetters} from 'vuex'

export default {
  name: 'PProduction-recipes',
  components: {PageTable, VueGoodTable},
  props: ['id', 'name'],
  data: () => ({
  }),
  computed: {
    ...mapGetters('production', ['get_columns', 'get_rows']),
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
      let arraytoverify = this.get_rows
      console.log(arraytoverify)
      for (let i = 0; i < arraytoverify.length; i++) {
        console.log(arraytoverify[i].product)
        console.log(this.$route)
        console.log(this.id)
        if (arraytoverify[i].product == this.id) {
          console.log('dupa')
          array = arraytoverify[i].array_of_rows
        }
      }
      return array
    }

  },
  mounted () {
    console.log(this.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
