<template>
  <div class="o-data-container">
    <page-table title="Planowanie produkcji">
      <div>
        <label class="a-select-label">
          Wybierz produkt:
          <a-select :options="get_recipes" v-model="product_name"></a-select>
        </label>
      </div>
      <div>
        <label class="a-select-label">
          Wprowadz ilość w kg do produkcji:
          <input class="a-input-recive-goods" v-model="howmanykg" type="number" min="1"/></label>
      </div>
      <button @click="show_table">Wylicz!</button>
      <div v-if="count === true">
        <div>
          {{get_title}}
        </div>
        <vue-good-table
          :columns="columns_for_plan"
          :rows="rows_for_plan"></vue-good-table>
      </div>
    </page-table>

  </div>
</template>

<script>
import PageTable from '../../templates/page-table'
import ASelect from '../../atoms/select'
import {mapGetters} from 'vuex'
import {VueGoodTable} from 'vue-good-table'

export default {
  name: 'PProduction-plan',
  components: {ASelect, PageTable, VueGoodTable},
  data: () => ({
    count: false,
    product_name: '',
    howmanykg: 1,
    columns_for_plan: [{
      label: 'Półprodukty',
      field: 'products'
    },
    {
      label: 'Ilości w stanie magazynowym',
      field: 'actualstock'
    },
    {
      label: 'Produkty do zamówienia',
      field: 'toorder'
    }
    ]
  }),
  computed: {
    ...mapGetters('production', ['get_recipe_links', 'get_rows']),
    ...mapGetters('frontend', ['rows_actual_stock']),
    get_recipes () {
      let arrayofoptions = []
      let arrayfromstore = this.get_recipe_links
      for (let i = 0; i < arrayfromstore.length; i++) {
        let obj = {
          label: arrayfromstore[i].label,
          value: arrayfromstore[i].id
        }
        arrayofoptions.push(obj)
      }
      return arrayofoptions
    },
    get_title () {
      let title = ''
      for (let x = 0; x < this.get_recipe_links.length; x++) {
        if (this.get_recipe_links[x].id == this.product_name) {
          title = this.get_recipe_links[x].label
        }
      }
      return title
    },
    rows_for_plan () {
      let arrayofrows = []
      let array = this.get_rows
      let arrayofrecipe = []
      let sumforstock = 0
      let toorderforproduction = 0
      for (let z = 0; z < array.length; z++) {
        if (this.product_name == array[z].product) {
          arrayofrecipe = array[z].array_of_rows // przypisanie tablicy receptury z obiektami półproduktów
        }
      }
      for (let s = 0; s < arrayofrecipe.length; s++) { // dla kazdego elementu w recepturze
        for (let i = 0; i < this.rows_actual_stock.length; i++) {
          if (arrayofrecipe[s].ingredients == this.rows_actual_stock[i].label) {
            for (let b = 0; b < this.rows_actual_stock[i].children.length; b++) {
              console.log(this.rows_actual_stock[i].children.length)
              console.log(this.rows_actual_stock[i].children[b].quantity)
              sumforstock += parseInt(this.rows_actual_stock[i].children[b].quantity) // dodanie po koleji wszystkich półproduktów dla danego produktu
            }
          }
        }
        let counter = 0
        counter = arrayofrecipe[s].quantity_percent * this.howmanykg / 100
        toorderforproduction = sumforstock - counter
        if (toorderforproduction < 0) toorderforproduction = toorderforproduction * (-1)
        else if (toorderforproduction >= 0) toorderforproduction = 0
        let obj = {
          products: arrayofrecipe[s].ingredients,
          actualstock: sumforstock,
          toorder: toorderforproduction
        }
        arrayofrows.push(obj)
        sumforstock = 0
      }

      return arrayofrows
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
