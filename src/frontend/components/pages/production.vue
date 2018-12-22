<template>
  <div class="o-data-container">
    <page-data title="Towary">
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
        to: '/production/production_plan',
        label: 'Planowanie produkcji'
      },
      {
        to: '/production/production',
        label: 'Produkcja'
      }
    ]

  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
