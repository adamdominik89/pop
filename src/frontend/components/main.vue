<template>
  <div class="o-data-container">
    <div class="o-login-container">

      <div class="m-single-container">
        <div class="m-user">
          <label class="a-label f-login">Login:
            <input
              class="a-input"
              type="text"
              v-model="login"/>
          </label>
        </div>
      </div>
      <div class="m-single-container">
        <div class="m-password">
          <label>Hasło:
            <input
              class="a-input"
              type="password"
              v-model="passw"/>
          </label>
        </div>
      </div>
      <div class="m-login-title">
        <button @click="log_in">zaloguj się</button>
      </div>
      <div v-if="is_correct === false" >
        Podany login lub hasło jest niepoprawne, spróbuj ponownie
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Main',
  data: () => ({
    login: '',
    passw: '',
    is_correct: true
  }),
  computed: {
    ...mapGetters('frontend', ['is_logged', 'get_log_data'])
  },

  methods: {
    ...mapMutations('frontend', ['set_login_status', 'set_actual_user']),
    log_in () {
      // kontrola loginu i hasla
      let correctlogin = false
      for (let i = 0; i < this.get_log_data.length; i++) {
        if (this.get_log_data[i].login === this.login &&
          this.get_log_data[i].passw === this.passw) {
          correctlogin = true
          this.set_login_status(true)
          this.set_actual_user(this.login)
        }
      }
      if (correctlogin === true) {
        this.$router.push('/stock')
      } else if (correctlogin === false) {
        this.is_correct = false
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
