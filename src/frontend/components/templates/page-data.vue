<template>
  <div>
  <div class="t-title">
    {{title}}
  </div>
    <div class="t-data">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page-data',
  data: () => ({
  }),
  props: ['title']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
