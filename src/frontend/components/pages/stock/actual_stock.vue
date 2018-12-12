<template>
  <div class="o-data-container">
    <page-data title="Stany towarów">
      tabelka z aktualnie posiadanymi towarami
    </page-data>
  </div>
</template>

<script>
import PageData from '../../templates/page-data'
export default {
  name: 'actual-stock',
  components: {PageData},
  data: () => ({})
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
