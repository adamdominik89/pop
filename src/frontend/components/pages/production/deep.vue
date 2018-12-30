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
            <input class="a-input-recive-goods" v-model="howmanykg" type="number" :min="minimum_value_for_single_batch"/></label>
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
      {{set_rows}}
    </page-data>

  </div>
</template>

<script>
import PageData from '../../templates/page-data'
import ASelect from '../../atoms/select'
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'PProduction-deep',
  components: {PageData, ASelect},
  data: () => ({
    product_name: '',
    howmanykg: 200,
    doproduction: false,
    productionispossible: true,
    maximumvalueformachine: 400,
    minimum_value_for_single_batch: 200,
    columns_for_production: [
      {
        label: 'Numer partii',
        field: 'part_number'
      },
      {
        label: 'Ilość w [kg]',
        field: 'quantity'
      },
      {
        label: 'Data przydatności do spożycia',
        field: 'best_before'
      },
      {
        label: 'Producent',
        field: 'producer'
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
    },
    count_how_many_batches () { // liczy ile na daną ilość zadaną trzeba wykonać mieszalników
      let value = 0
      if (this.howmanykg % this.maximumvalueformachine > 0) {
        value = parseInt(this.howmanykg / this.maximumvalueformachine + 1)
      } else {
        value = this.howmanykg / this.maximumvalueformachine
      }
      console.log(value)
      return value
    },
    how_many_kg_for_single_batch () {
      let value = 0
      value = this.howmanykg / this.count_how_many_batches
      return value
    },
    get_rows_for_every_table () {
      let array = []
      return array
    },
    set_rows () {
      let array = []
      for (let i = 0; i < this.count_how_many_batches; i++) {
        let arrayofrows = []
        array.push(arrayofrows)
      }
      return array
    }
  },
  methods: {
    ...mapMutations('frontend', ['sort_stock_by_date']),
    count_production () {
      this.doproduction = true
      let array = this.rows_actual_stock.concat()
      // console.log('przed przesortowaniem')
      // console.log(array)
      // console.log('po posortowaniu')
      // przesortowanie tablicy ze stanem produkcyjnym w storze wg daty przydatnosci do spozycia
      for (let x = 0; x < this.rows_actual_stock.length; x++) {
        this.sort_stock_by_date({id: x})
      }
      // console.log(this.rows_actual_stock)
      // console.log('wyliczenie produkcji')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
