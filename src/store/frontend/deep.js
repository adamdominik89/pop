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
        id: 1,
        ingredients: [],
        // obiekt raportu
        // id
        // numer partti produkcyjnej
        // półprodukty wraz z numerami partti z których zostały wykonane
      },
    ],
  },
  getters: {
    get_reports: state => state.reports
  },
  mutations: {
    add_reports: (state, {array}) => {
      for (let i = 0; i < array.length; i++) {
        let obj = {
          product_name: array[i].product_name,
          production_date: array[i].production_date,
          batch_numer: array[i].batch_numer,
          produced_kg: array[i].quantity_produced,
          quantity_closed: array[i].quantity_produced,
          single_packaging: 1,
          ingredients: array[i].arrayofrows,
          id: array[i].id
        }
        console.log(obj)
        state.reports.push(obj)
      }
    }
  },
  actions: {},
}
