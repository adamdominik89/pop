<template>
  <div class="o-data-container">
    <page-table title="Przyjecie towaru">

      <div class="a-input-container f-data">
        <label class="a-input-label"> Przyjęcie : </label>
        <div class="a-form-container f-fiscalization">
          <template v-for="(type, key) in recive_type"
          >
            <div class="a-radio-single"
                 :key="key">
              <label>
                <input v-model="value_from_v_model" :value="type.value" type="radio" />
                {{ type.label }}
              </label>
            </div>
          </template>
        </div>
      </div>

      select ilosc numer partii jeszce jakies info
    </page-table>
  </div>
</template>

<script>

import PageTable from '../../templates/page-table'

export default {
  name: 'Recive-Goods',
  components: {PageTable},
  data: () => ({
    value_from_v_model: 0,
    recive_type: [
      {
        label: 'Istniejącego towaru',
        value: 0
      },
      {
        label: 'Nowego towaru',
        value: 1
      }
    ]
  }),
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
