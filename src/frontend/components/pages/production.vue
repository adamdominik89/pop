<template>
  <div class="o-data-container">
    <page-data title="Produkcja">
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
  components: {PageData},
  data: () => ({
    links: [
      {
        to: '/production/recipes',
        label: 'Receptury'
      },
      {
        to: '/production/add_new_recipe',
        label: 'Dodawanie nowej receptury'
      },
      {
        to: '/production/plan',
        label: 'Planowanie produkcji'
      },
      {
        to: '/production/deep',
        label: 'Produkcja'
      }
    ]

  }),
  methods: {
    go_to (link) {
      this.$router.push(link)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
