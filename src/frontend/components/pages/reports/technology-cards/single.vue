<template>
  <div class="o-data-container">
    <page-data title="Karta technologiczna">
      <div>Karta technologiczna</div>
      <div>Nazwa produktu: {{link}}</div>
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
  data: () => ({}),
  mutations: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
