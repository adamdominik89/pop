<template>
  <div class="o-data-container">
    <page-data title="Receptury">
      <router-link v-for="(link, key) in links"
      :key="key" :to="link.to">{{link.label}}</router-link>
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
        to: '',
        label: 'ciasto czekoladowe'
      }
    ]

  })
}
</script>
<style>
</style>
