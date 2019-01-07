<template>
  <div class="o-data-container">
    <page-data title="Karty technologiczne">
      <div class="a-single-link"
           v-for="(link, key) in get_reports"
           :key="key">
        <router-link
          :to="{path: path, name: name, params: { link: link}}">
          {{link.id}}. {{link.product_name}} / Data produkcji: {{link.production_date}} / Ilość w kg: {{link.produced_kg}}
        </router-link>
      </div>
    </page-data>

  </div>
</template>

<script>
import PageData from '../../templates/page-data'
import {mapGetters} from 'vuex'
export default {
  name: 'Technology-cards',
  components: {PageData},
  data: () => ({
    path: '/reports/technology_card',
    name: 'technology_card'
  }),
  computed: {
    ...mapGetters('deep', ['get_reports']),
    get_number () {
      let number = 1
      for (let i = 0; i < this.get_reports.length; i++) {
      }
      return number
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
