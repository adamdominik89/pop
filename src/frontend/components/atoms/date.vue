<template>
  <div class="a-select-container">
    <datepicker></datepicker>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'a-date',
  components: {Datepicker},
  props: [],
  data: () => ({
  }),
  computed: {
  }
}
</script>
