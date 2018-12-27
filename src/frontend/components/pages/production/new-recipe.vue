<template>
  <div class="o-data-container">
    <page-table title="Dodanie nowej receptury">
      ilość produktów <input v-model="quantity" type="number"/>
      <div v-if="quantity !== 0">
        <div>
          <hr/>
          Nazwa produktu:<input/>
        </div>
        <div>Lista Półproduktów</div>
      <div v-for="(number, key) in get_row_for_data"
      :key="key">
        <label class="a-select-label">
          Nazwa połproduktu:
          <a-select></a-select>
        </label>
        <label class="a-select-label">
          Ilość w gramach:
          <input/>
        </label>
      </div>
        <button>Dodaj!</button>
      </div>
    </page-table>

  </div>
</template>

<script>
import PageTable from '../../templates/page-table'
import ASelect from '../../atoms/select'
export default {
  name: 'PProduction-add-new-recipe',
  components: {PageTable, ASelect},
  data: () => ({
    quantity: 0
  }),
  computed: {
    get_row_for_data () {
      let array = []
      for (let i = 0 ; i < this.quantity; i++) {
        let obj = {
          value: ''
        }
        array.push(obj)
      }
      return array
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
