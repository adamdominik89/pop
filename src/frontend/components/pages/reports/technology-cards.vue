<template>
  <div class="o-data-container">
    <page-data title="Karty technologiczne">
      <div class="a-single-link"
           v-for="(link, key) in get_reports"
           :key="key">
        <router-link
          :to="{path: path, name: link.name, params: { id: link.id}}">{{link.id}}. {{link.label}}</router-link>
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
    path: '/'
  }),
  computed: {
    ...mapGetters('deep', ['get_reports']),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
