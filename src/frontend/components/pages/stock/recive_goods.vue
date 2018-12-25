<template>
  <div class="o-data-container">
    <page-table title="Przyjecie towaru">

      <div class="a-input-container f-data">
        <label class="a-input-label"> Przyjęcie : </label>
        <div class="a-form-container f-fiscalization">
          <template v-for="(type, key) in get_recive_options"
          >
            <div class="a-radio-single"
                 :key="key">
              <label>
                <input v-model="value_from_v_model" :value="type.value" type="radio"/>
                {{ type.label }}
              </label>
            </div>
          </template>
        </div>
      </div>

      <div v-if="value_from_v_model === 0"
      class="p-stock-input-container">
        <div>
        <label class="a-select-label">Wybierz towar:
        <a-select
        :options="get_actual_goods"
        v-model="product_name_exisiting"></a-select></label>
        </div>
        <div>
          <label class="a-select-label">Nazwa producenta:
            <input class="a-input-recive-goods"
            v-model="producer_name_existing"></label>
        </div>
        <div>
          <label class="a-select-label">
          Numer partii towaru:
            <input class="a-input-recive-goods"
            v-model="batch_number_existing">
        </label>
        </div>
        <div>
          <label class="a-select-label">
            Ilość [kg]:
            <input class="a-input-recive-goods" type="number" min="0"
            v-model="quantity_existing">
          </label>
        </div>
        <div>
          <label class="a-select-label">
            Data przydatności do spożycia:
            <input type="date" name="bday" min="2019-01-01" v-model="date_existing" class="a-input-recive-goods">
          </label>
        </div>

        <div class="a-button-container f-recive-goods">

            <button @click="add_existing">Dodaj produkt do bazy</button>
        </div>

      </div>
      <div v-if="value_from_v_model === 1">

        <div>
          <label class="a-select-label">Nazwa towaru:
            <input class="a-input-recive-goods"
            v-model="product_name"></label>
        </div>
        <div>
          <label class="a-select-label">Nazwa producenta:
            <input class="a-input-recive-goods"
            v-model="producer_name"></label>
        </div>
        <div>
          <label class="a-select-label">
            Numer partii towaru:
            <input class="a-input-recive-goods"
            v-model="batch_number">
          </label>
        </div>
        <div>
          <label class="a-select-label">
            Ilość [kg]:
            <input class="a-input-recive-goods" type="number" min="0"
            v-model="quantity">
          </label>
        </div>
        <div>
          <label class="a-select-label">
            Data przydatności do spożycia:
            <input type="date" name="bday" min="2019-01-01" v-model="date" class="a-input-recive-goods">
          </label>
        </div>

        <div class="a-button-container f-recive-goods">
            <button @click="add">Dodaj produkt do bazy</button>
        </div>
      </div>
    </page-table>
  </div>
</template>

<script>

import PageTable from '../../templates/page-table'
import ASelect from '../../atoms/select'
import {mapGetters, mapState, mapMutations} from 'vuex'
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'Recive-Goods',
  components: {PageTable, ASelect, Datepicker},
  data: () => ({
    product_name_exisiting: '',
    producer_name_existing: '',
    batch_number_existing: '',
    quantity_existing: 0,
    date_existing: '',
    product_name: '',
    producer_name: '',
    batch_number: '',
    quantity: 0,
    date: '',

    ...mapState('frontend', ['recive_option'])
  }),
  mounted () {
  },
  computed: {
    get_actual_goods () {
      let array = []
      for (let i = 0; i < this.rows_actual_stock.length; i++) {
        console.log(this.rows_actual_stock[i].label)
        let obj = {
          label: this.rows_actual_stock[i].label,
          value: this.rows_actual_stock[i].label
        }
        array.push(obj)
      }
      // pobranie opcji ze stora i dodanie do tablicy
      return array
    },
    value_from_v_model: {
      get () {
        return this.get_actual_recive_option
      },
      set (value) {
        this.update_recive_option(value)
      }
    },
    ...mapGetters('frontend', ['get_recive_options', 'get_actual_recive_option', 'rows_actual_stock'])
  },
  methods: {
    ...mapMutations('frontend', ['update_recive_option']),
    add_existing () {
      if (this.product_name_exisiting !== '' &&
        this.producer_name_existing !== '' &&
        this.batch_number_existing !== '' &&
        this.quantity_existing !== 0 &&
        this.date_existing !== '') {
        console.log('dodanie do stora')
      } else {
        alert('Nie wypełniono wszystkich pól')
      }
    },
    add () {
      if (this.product_name !== '' &&
        this.producer_name !== '' &&
        this.batch_number !== '' &&
        this.quantity !== 0 &&
        this.date !== '') {
        console.log('dodanie do stora nowego towaru')
      } else {
        alert('Nie wypełniono wszystkich pól')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
