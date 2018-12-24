module.exports = {
  namespaced: true,
  state: {
    is_logged: false,
    columns_actual_stock: [{
      label: 'Numer partii',
      field: 'part_number'
    },
    {
      label: 'Ilość w [kg]',
      field: 'quantity'
    },
    {
      label: 'Data przydatności do spożycia',
      field: 'best_before'
    },
    {
      label: 'Producent',
      field: 'producer'
    }
    ],
    rows_actual_stock: [{
      mode: 'span',
      label: 'Mąka pszenna typ 500',
      html: false,
      children: [
        {
          part_number: '100/2019', quantity: 550, best_before: '10-12-2018', producer: 'Mlyn tadeusz Rybak'
        },
        {
          part_number: '21/01/2018', quantity: 4000, best_before: '10-12-2020', producer: 'mlyn xyz'
        }
      ]
    },
    {
      mode: 'span',
      label: 'Cukier',
      html: false,
      children: [
        {
          part_number: '100/2019', quantity: 6550, best_before: '10-12-2018', producer: 'Cukrowania z'
        },
        {
          part_number: '21/01/2018', quantity: 4000, best_before: '10-12-2020', producer: 'Cukrownia b'
        }
      ]
    }],

  },
  getters: {
    columns_actual_stock: state => state.columns_actual_stock,
    rows_actual_stock: state => state.rows_actual_stock
  },
  mutations: {
  },
  actions: {
  }
}
