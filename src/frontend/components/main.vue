<template>
  <div class="o-data-container">
    <div class="o-login-container">

      <div class="m-single-container">
        <div class="m-user">
          <label class="a-label f-login">Login:
            <input class="a-input" type="text"/></label>
        </div>
      </div>
      <div class="m-single-container">
        <div class="m-password">
          <label>Hasło:
            <input class="a-input" type="password"/>
          </label>
        </div>
      </div>
      <div class="m-login-title">
        <button @click="log_in">zaloguj się</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data: () => ({}),
  computed: {},

  methods: {
    log_in () {
      // kontrola loginu i hasla
      this.$router.push('/stock')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
