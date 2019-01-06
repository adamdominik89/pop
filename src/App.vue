<template>
  <div id="app">
    <div class="o-buttons">
      <div class="a-button-container">
        <button class="a-button" @click="go_to_stock">TOWARY</button>
      </div>
      <div class="a-button-container" @click="go_to_production">
        <button class="a-button">PRODUKCJA</button>
      </div>
      <div class="a-button-container">
        <button class="a-button" @click="go_to_reports">RAPORTY</button>
      </div>

    </div>
    <div v-if="is_logged === true">
    <div class="a-user-container">
      Witaj: {{user}};
      <router-link to="/" @click.native="logout">{{log_out}}</router-link>
    </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'App',
  data: () => ({
    user: 'Adam',
    log_out: 'Wyloguj się'

  }),
  computed: {
    ...mapGetters('frontend', ['is_logged'])
  },
  methods: {
    ...mapMutations('frontend', ['set_login_status']),
    go_to_stock () {
      this.$router.push('/stock')
    },
    go_to_production () {
      this.$router.push('/production')
    },
    go_to_reports () {
      this.$router.push('/reports')
    },
    logout () {
      console.log('dupa')
      this.set_login_status(false)
    }
  }
}
</script>

<style src="../src/frontend/style/css/index.css"></style>
