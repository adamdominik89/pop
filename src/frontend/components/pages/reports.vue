<template>
  <div class="o-data-container">
    <page-data>
    <div class="a-button-container f-single"
         v-for="(link, key) in links"
         :key="key"
    >
      <button class="a-button f-deep-menu"
              @click="go_to(link.to)">{{link.label}}
      </button>
    </div>
    </page-data>
  </div>
</template>

<script>
import PageData from '../templates/page-data'
export default {
  name: 'Stock',
  components: { PageData },
  data: () => ({
    links: [
      {
        to: '/reports/technology_cards',
        label: 'Karty technologiczne'
      }
    ]
  }),
  methods: {
    go_to (link) {
      console.log(link)
      this.$router.push(link)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
