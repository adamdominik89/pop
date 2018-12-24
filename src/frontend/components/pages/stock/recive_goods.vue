<template>
  <div class="o-data-container">
    <page-table title="Przyjecie towaru">

      <div class="a-input-container f-data">
        <label class="a-input-label"> Przyjęcie : </label>
        <div class="a-form-container f-fiscalization">
          <template v-for="(type, key) in get_recive_options"
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
      {{get_actual_recive_option}}
      select ilosc numer partii jeszce jakies info
      {{get_recive_options}}
    </page-table>
  </div>
</template>

<script>

import PageTable from '../../templates/page-table'
import {mapGetters, mapState, mapMutations} from 'vuex'

export default {
  name: 'Recive-Goods',
  components: {PageTable},
  data: () => ({

    ...mapState('frontend', ['recive_option'])
  }),
  mounted () {
  },
  computed: {
    value_from_v_model: {
      get () {
        return this.get_actual_recive_option
      },
      set (value) {
        this.update_recive_option(value)
      }
    },
    ...mapGetters('frontend', ['get_recive_options', 'get_actual_recive_option'])
  },
  methods: {
    ...mapMutations('frontend', ['update_recive_option'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
