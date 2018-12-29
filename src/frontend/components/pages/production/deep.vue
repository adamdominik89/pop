<template>
  <div class="o-data-container">
    <page-data title="Produkcja">
    produkcja
      select produktu /
      podanie ilości produkcyjnej /
      button potwierdz /
      WYNIK: brakuje w towarach nastepujacych produktów zmień ilość produkcyjna na mniejsza
      LUB wyswietlenie tabelek z numerem poszczegolnych zasypów oraz numerów partii produkcyjnych dla poszczególnych zasypów.
    </page-data>

  </div>
</template>

<script>
import PageData from '../../templates/page-data'
export default {
  name: 'PProduction-deep',
  components: {PageData},
  data: () => ({

  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
