<template>
  <div class="o-data-container">
    <page-table title="Receptury">
      {{get_title}}
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
    ...mapGetters('production', ['get_columns', 'get_rows', 'get_recipe_links']),
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
      for (let i = 0; i < arraytoverify.length; i++) {
        if (arraytoverify[i].product == this.id) {
          for (let c = 0; c < arraytoverify[i].array_of_rows.length; c++) {
            array.push(arraytoverify[i].array_of_rows[c])
          }
        }
      }
      let sum_grams = 0
      let sum_percent = 0
      let sum_recipe_for_one_kg = 0
      for (let x = 0; x < array.length; x++) {
        sum_grams += parseInt(array[x].quantity_grams)
        sum_percent += array[x].quantity_percent
        sum_recipe_for_one_kg += array[x].recipe_1kg
      }
      let obj = {
        ingredients: 'SUMA',
        quantity_grams: Math.round(sum_grams),
        quantity_percent: Math.round(sum_percent),
        recipe_1kg: Math.round(sum_recipe_for_one_kg)
      }
      array.push(obj)
      return array
    },
    get_title () {
      let title = ''
      let array = this.get_recipe_links
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === this.id) title = array[i].label
      }
      return title
    }

  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
