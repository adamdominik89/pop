<template>
  <div class="o-data-container">
    <page-data title="Produkcja">
      <div v-if="doproduction === false">
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
        <div>
          <button @click="count_production">Przelicz produkcję!</button>
        </div>
      </div>
      <div v-if="doproduction === true">
        <div v-if="rows_for_plan === false">
          <div>
            Brak wystarczającej ilości półproduktów w magazynie.
          </div>
          <div>
            Zmniejsz ilość produkcyjną lub Zaplanuj ponownie produkcję dla ilości {{howmanykg}} kg:
          </div>
          <div>
            1. Zamów odpowiednie towary
          </div>
          <div>
            2. Przyjmij towary na stan magazynowy
          </div>
          <div>
            3. Dokonaj ponownie produkcji dla ilości {{howmanykg}} kg
          </div>
        </div>
        <div v-if="rows_for_plan === true">
          wyswietlenie tabelek z numerem poszczegolnych zasypów oraz numerów partii produkcyjnych dla poszczególnych
          zasypów.
          DLA KAZDEGO ZASYPU
          PÓŁPRODUKT A DLA NIEGO WIERSZE Z DATA PRZYDATNOSCI DO SPOZYCIA / NUMER PARTII / ORAZ ILOSC W KG DLA KAZDEGO
          NUMERU
          PARTII
          button przycisk potwierdzajacy zakonczenie produkcji i
          stworzenie linkow raportow oraz raportow dla poszczegolnych partii
          <div>
            <button>Potwierdź wykonanie całej produkcji!</button>
          </div>
        </div>
      </div>
    </page-data>

  </div>
</template>

<script>
import PageData from '../../templates/page-data'
import ASelect from '../../atoms/select'
import {mapGetters} from 'vuex'

export default {
  name: 'PProduction-deep',
  components: {PageData, ASelect},
  data: () => ({
    product_name: '',
    howmanykg: 1,
    doproduction: false,
    productionispossible: true,
    maximumvalueformachine: 400
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
    rows_for_plan () {
      let value = true
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
              sumforstock += parseInt(this.rows_actual_stock[i].children[b].quantity) // dodanie po koleji wszystkich półproduktów dla danego produktu
            }
          }
        }
        let counter = 0
        counter = arrayofrecipe[s].quantity_percent * this.howmanykg / 100
        toorderforproduction = sumforstock - counter
        if (toorderforproduction < 0) {
          value = false
        } else if (toorderforproduction >= 0) toorderforproduction = 0
        sumforstock = 0
      }
      return value
    }
  },
  methods: {
    count_production () {
      this.doproduction = true
      console.log('wyliczenie produkcji')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
