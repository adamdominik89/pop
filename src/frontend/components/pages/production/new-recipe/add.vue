<template>
  <div class="o-data-container">
    <page-table title="Receptury">
      <input/>
    </page-table>

  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table'
import PageTable from '../../../templates/page-table'

export default {
  name: 'PProduction-add-new-recipe-display',
  components: {PageTable, VueGoodTable},
  props: [],
  data: () => ({
  }),
  computed: {
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
