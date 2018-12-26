<template>
  <div class="o-data-container">
    <page-data title="Receptury">
      <div class="a-single-link"
           v-for="(link, key) in get_recipe_links"
           :key="key">
      <router-link
        :to="{path: link.to, name: link.name, params: { id: link.id}}">{{link.id}}. {{link.label}}</router-link>
      </div>
    </page-data>
  </div>
</template>

<script>
import PageData from '../../templates/page-data'
import {mapGetters} from 'vuex'
export default {
  name: 'PProduction-recipes',
  components: {PageData},
  data: () => ({
  }),
  computed: {
    ...mapGetters('production', ['get_recipe_links']),
  },
  mounted () {
    // console.log(this.$route.params)
  }
}
</script>
<style>
</style>
