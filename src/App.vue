<template>
  <div id="app">
    <div class="o-buttons">
      <div class="a-button-container">
        <button class="a-button">Towary</button>
      </div>
      <div class="a-button-container">
        <button class="a-button">Produkcja</button>
      </div>
      <div class="a-button-container">
        <button class="a-button">Raporty</button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style src="../src/frontend/style/css/index.css"></style>
