<template>
  <button
    class="a-button f-deep-menu"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'a-button-deep-menu'
}
</script>
