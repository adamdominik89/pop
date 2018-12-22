<template>
  <div class="o-data-container">
    <page-table title="Stany towarów">
      <vue-good-table
        :columns="columns"
        :rows="rows"
        :groupOptions="{enabled: true}"
      ></vue-good-table>
    </page-table>
  </div>
</template>

<script>
import PageTable from '../../templates/page-table'
import { VueGoodTable } from 'vue-good-table'
export default {
  name: 'actual-stock',
  components: {VueGoodTable, PageTable},
  data: () => ({
    columns: [ {
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
    ],
    rows: [{
      mode: 'span',
      label: 'Mąka pszenna typ 500',
      html: false,
      children: [
        {
          part_number: '100/2019', quantity: 550, best_before: '10-12-2018', producer: 'Mlyn tadeusz Rybak'
        },
        {
          part_number: '21/01/2018', quantity: 4000, best_before: '10-12-2020', producer: 'mlyn xyz'
        }
      ]
    },
    {
      mode: 'span',
      label: 'Cukier',
      html: false,
      children: [
        {
          part_number: '100/2019', quantity: 6550, best_before: '10-12-2018', producer: 'Cukrowania z'
        },
        {
          part_number: '21/01/2018', quantity: 4000, best_before: '10-12-2020', producer: 'Cukrownia b'
        }
      ]
    }]
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
