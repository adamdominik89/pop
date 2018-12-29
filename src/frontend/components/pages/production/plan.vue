<template>
  <div class="o-data-container">
    <page-table title="Planowanie produkcji">
      <div>
        <label class="a-select-label">
        Wybierz produkt:
          <a-select></a-select></label>
      </div>
      <div>
        <label class="a-select-label">
          Wprowadz ilość w kg do produkcji:<input class="a-input-recive-goods"/></label>
      </div>
      <button @click="show_table">Wylicz!</button>
      <div v-if="count === true">
        nazwa produktu
        tabelka
        półprodukty, jakie ilości posiadamy na stanie magazynowym oraz ilości jakie potrzeba domówić
      </div>
    </page-table>

  </div>
</template>

<script>
import PageTable from '../../templates/page-table'
import ASelect from '../../atoms/select'

export default {
  name: 'PProduction-plan',
  components: {ASelect, PageTable},
  data: () => ({
    count: false
  }),
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
