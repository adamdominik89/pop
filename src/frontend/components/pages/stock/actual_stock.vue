<template>
  <div class="o-data-container">
    <page-table title="Stany towarów">
      <vue-good-table
        :columns="columns_actual_stock"
        :rows="rows_actual_stock"
        :groupOptions="{enabled: true}"
      ></vue-good-table>
    </page-table>
  </div>
</template>

<script>
import PageTable from '../../templates/page-table'
import { VueGoodTable } from 'vue-good-table'
import {mapGetters} from 'vuex'

export default {
  name: 'actual-stock',
  components: {VueGoodTable, PageTable},
  data: () => ({
  }),
  computed: {
    ...mapGetters('frontend', ['columns_actual_stock', 'rows_actual_stock']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
