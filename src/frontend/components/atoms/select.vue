<template>
  <div class="a-select-container">
    <select
      v-model="_value"
      class="a-select"
      :class="get_class"
      @focus="$emit('focus', $event)"
      @blur="$emit('blur', $event)"
    >
      <option
        v-for="(option,key) in options"
        :key="key"
        :value="option.value"
        :disabled="option.value === undefined"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>


export default {
  name: 'a-select',
  components: { },
  props: ['options', 'value', 'class_feature'],
  data: () => ({
  }),
  computed: {
    get_class () {
      return this.class_feature
    },
    _value: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>
