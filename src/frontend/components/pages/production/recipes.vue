<template>
  <div class="o-data-container">
    <page-data title="Receptury">
      <div class="a-single-link"
           v-for="(link, key) in links"
           :key="key">
      <router-link
        :to="{
        path: 'link.to',
        params: {
          id: link.id
        },
      }">{{link.label}}</router-link>
      </div>
    </page-data>

  </div>
</template>

<script>
import PageData from '../../templates/page-data'
export default {
  name: 'PProduction-recipes',
  components: {PageData},
  data: () => ({
    links: [
      {
        to: '/production/recipes/display',
        label: 'ciasto czekoladowe',
        id: 0
      },
      {
        to: '/production/recipes/display',
        label: 'ciasto cytrynowe',
        id: 1
      }
    ]

  }),
  mounted () {
    // console.log(this.$route.params)
  }
}
</script>
<style>
</style>
