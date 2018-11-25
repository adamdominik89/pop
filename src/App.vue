<template>
  <div id="app">
    <div class="o-buttons">
      <div class="a-button-container">
        <button class="a-button" @click="go_to_stock">Towary</button>
      </div>
      <div class="a-button-container" @click="go_to_production">
        <button class="a-button">Produkcja</button>
      </div>
      <div class="a-button-container">
        <button class="a-button" @click="go_to_reports">Raporty</button>
      </div>
      <div class="a-user-container">
        Witaj: {{user}}
        <router-link to="/">{{log_out}}</router-link> {{is_logged}}
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import {mapState} from 'vuex'

export default {
  name: 'App',
  data: () => ({
    user: 'Adam',
    log_out: 'wyloguj'

  }),
  computed: {
    ...mapState('frontend', ['is_logged'])
  },
  methods: {
    go_to_stock () {
      this.$router.push('/stock')
    },
    go_to_production () {
      this.$router.push('/production')
    },
    go_to_reports () {
      this.$router.push('/reports')
    }
  }
}
</script>

<style src="../src/frontend/style/css/index.css"></style>
