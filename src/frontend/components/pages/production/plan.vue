<template>
  <div class="o-data-container">
    <page-data title="Planowanie produkcji">
      zaplanowanie produkcji
      lista linkow do receptur / przenosza do okna gdzie pojawia sie nazwa oraz input ile chcesz wyprodukowac ? /
      potwierdzasz przyciskiem wyswietla sie tabelka z receptura (nazwy oraz ilosci jakie posiadamy na stanie magazynowym oraz
      ilosci jakie potrzebujemy domowic aby wyprodukowac porzadana ilość
    </page-data>

  </div>
</template>

<script>
import PageData from '../../templates/page-data'
export default {
  name: 'PProduction-plan',
  components: {PageData},
  data: () => ({

  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
