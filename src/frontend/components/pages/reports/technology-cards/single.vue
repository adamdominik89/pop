<template>
  <div class="o-data-container">
    <page-data title="Karta technologiczna">
      <div>Karta technologiczna</div>
      <div>Nazwa produktu: {{link.product_name}}</div>
      <div>Data produkcji: {{link.production_date}}</div>
      <div>Numer Partii: {{link.batch_numer}}</div>
      <div>Ilość wyprodukowana [kg]: {{link.produced_kg}}</div>
      <div>Ilość zamknięta [kg]: {{link.quantity_closed}}</div>
      <div>Opakowania Jednostkowe [kg]: {{link.single_packaging}}</div>
      <div>Produkty przeznaczone do wykonania powyższego numeru partii:</div>
      <div>
        <vue-good-table
        :columns="columns_for_production"
        :rows="get_rows"
        :groupOptions="{enabled: true}"
      ></vue-good-table></div>
      <div>Odpowiedzialny: .............................................</div>
    </page-data>
  </div>
</template>

<script>
import PageData from '../../../templates/page-data'

export default {
  name: 'single',
  components: {PageData},
  props: ['link'],
  mounted () {
    console.log(this.link)
  },
  data: () => ({
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
    ],
  }),
  mutations: {},
  computed: {
    get_rows () {
      let array = this.link.ingredients
      return array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
