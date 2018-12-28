<template>
  <div class="o-data-container">
    <page-table title="Dodanie nowej receptury">
      <div>
        Ilość półproduktów: <input v-model="quantity" type="number"/>
      </div>
      <div v-show="quantity != 0"
           class="m-new-recipe-container">
        <div>
          <hr/>
          Nazwa produktu:<input v-model="text_for_product"/>
        </div>
        <div class="m-new-recipe-container">
          Lista Półproduktów
        </div>
        <div v-for="(number, key) in get_row_for_data"
             :key="key"
             class="m-new-recipe-container f-input">
          <label class="a-select-label f-double">
            Nazwa połproduktu:
            <a-select
              :options="get_options_for_recipe"
              v-model="number.product"></a-select>
          </label>
          <label class="a-select-label f-double">
            Ilość w gramach:
            <input v-model="number.grams" type="number" min="0"/>
          </label>
        </div>
        <button
          @click="add_to_store">
          Dodaj!
        </button>
      </div>
    </page-table>

  </div>
</template>

<script>
import PageTable from '../../templates/page-table'
import ASelect from '../../atoms/select'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'PProduction-add-new-recipe',
  components: {PageTable, ASelect},
  data: () => ({
    quantity: 1,
    text_for_product: ''
  }),
  computed: {
    ...mapGetters('frontend', ['rows_actual_stock']),
    ...mapGetters('production', ['get_recipe_links']),
    get_options_for_recipe () {
      let arrayofoptions = []
      for (let x = 0; x < this.rows_actual_stock.length; x++) {
        let obj = {
          label: this.rows_actual_stock[x].label,
          value: this.rows_actual_stock[x].label
        }
        arrayofoptions.push(obj)
      }
      return arrayofoptions
    },
    get_row_for_data () {
      let array = []
      for (let i = 0; i < this.quantity; i++) {
        let obj = {
          product: '',
          grams: 1
        }
        array.push(obj)
      }
      // console.log(array)
      return array
    },
    get_results () {
      let arrayofresults = []
      for (let i = 0; i < this.quantity; i++) {
        let obj = {
          product: '',
          grams: 1
        }
        arrayofresults.push(obj)
      }
      console.log(arrayofresults)
      return arrayofresults
    }
  },
  methods: {
    ...mapMutations('production', ['add_new_link']),
    add_to_store () {
      let array = this.get_row_for_data
      let canadd = true
      if (this.text_for_product === '') {
        alert('Nie wypełniono nazwy produktu')
        canadd = false
      }
      for (let i = 0; i < array.length; i++) {
        if (array[i].product === '') {
          canadd = false
          alert('Nie wypełniono jednego z pól półproduktów')
        }
        if (array[i].grams === 0) {
          canadd = false
          alert('Liczba gram musi być większa od 0')
        }
      }
      if (canadd === true) {
        // stworzenie linka
        // 1 pobranie aktualnej tablicy linków, przypisanie id + 1
        let actuallinks = this.get_recipe_links
        let nextid = actuallinks[actuallinks.length - 1].id + 1
        let obj = {
          to: '/production/recipes/display',
          label: this.text_for_product,
          id: nextid,
          name: 'display'
        }
        this.add_new_link({newlink: obj})
        for (let c = 0; c < actuallinks.length; c++) {
        }

        // stworzenie wierszy dla receptury

        console.log('dodanie receptury do stora')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
