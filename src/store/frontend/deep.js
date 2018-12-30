module.exports = {
  namespaced: true,
  state: {
    reports: [
      {
        product_name: 'ciasto czekoladowe',
        production_date: '2018-10-10',
        batch_numer: 1,
        produced_kg: 300,
        quantity_closed: 300,
        single_packaging: 1,
        ingredients: []
        // obiekt raportu
        // id
        // numer partti produkcyjnej
        // półprodukty wraz z numerami partti z których zostały wykonane
      }
    ]
  },
  getters: {
    get_reports: state => state.reports,
  },
  mutations: {
  },
  actions: {
  }
}
