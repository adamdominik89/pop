<template>
  <div class="o-data-container">
    <page-table title="Planowanie produkcji">
      <div>
        <label class="a-select-label">
        Wybierz produkt:
          <a-select :options="get_recipes" v-model="product_name"></a-select></label>
      </div>
      <div>
        <label class="a-select-label">
          Wprowadz ilość w kg do produkcji:<input class="a-input-recive-goods"/></label>
      </div>
      <button @click="show_table">Wylicz!</button>
      <div v-if="count === true">
        <div>
        {{product_name}}
        </div>
        <vue-good-table></vue-good-table>
        tabelka
        półprodukty, jakie ilości posiadamy na stanie magazynowym oraz ilości jakie potrzeba domówić
      </div>
    </page-table>

  </div>
</template>

<script>
import PageTable from '../../templates/page-table'
import ASelect from '../../atoms/select'
import {mapGetters} from 'vuex'
import { VueGoodTable } from 'vue-good-table'

export default {
  name: 'PProduction-plan',
  components: {ASelect, PageTable, VueGoodTable},
  data: () => ({
    count: false,
    product_name: '',
  }),
  computed: {
    ...mapGetters('production', ['get_recipe_links']),
    get_recipes () {
      let arrayofoptions = []
      let arrayfromstore = this.get_recipe_links
      for (let i = 0 ; i < arrayfromstore.length; i++){
        let obj = {
          label: arrayfromstore[i].label,
          value: arrayfromstore[i].label
        }
        arrayofoptions.push(obj)
      }

      return arrayofoptions
    }
  },
  methods: {
    show_table () {
      this.count = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
