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

      <div v-if="value_from_v_model === 0">
        przyjecie istniejacego towaru
        select ze stora / input na numer partii / input na ilosc / input na date przydatnosci do spozycia bardzo wazne data musi byc jednolita dla kazdego produktu
        <a-select
        :options="get_actual_goods"
        v-model="product_name"></a-select>
      </div>
      <div v-if="value_from_v_model === 1">
        przyjecie nowego towaru
      </div>
    </page-table>
  </div>
</template>

<script>

import PageTable from '../../templates/page-table'
import ASelect from '../../atoms/select'
import {mapGetters, mapState, mapMutations} from 'vuex'

export default {
  name: 'Recive-Goods',
  components: {PageTable, ASelect},
  data: () => ({
    product_name: '',
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
    ...mapMutations('frontend', ['update_recive_option'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
