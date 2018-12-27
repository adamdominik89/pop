<template>
  <div class="o-data-container">
    <page-data title="Dodanie nowej receptury">
      ilość produktów <input v-model="quantity" type="number"/>
      <div v-if="quantity !== 0">
        <div>
          <hr/>
          Nazwa produktu:<input/>
        </div>
        <div>Lista Półproduktów</div>
      </div>
      <div v-for="(number, key) in quantity"
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
    </page-data>

  </div>
</template>

<script>
import PageData from '../../templates/page-data'
import ASelect from '../../atoms/select'
export default {
  name: 'PProduction-add-new-recipe',
  components: {PageData, ASelect},
  data: () => ({
    quantity: 0
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
