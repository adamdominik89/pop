module.exports = {
  namespaced: true,
  state: {
    is_logged: false,
    recive_option: 0,
    log_data: [
      {
        login: 'admin',
        passw: 'admin'
      }
    ],
    recive_options: [
      {
        label: 'Istniejącego towaru',
        value: 0
      },
      {
        label: 'Nowego towaru',
        value: 1
      }
    ],
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
          part_number: '21/01/2018', quantity: 4000, best_before: '2024-10-10', producer: 'mlyn xyz'
        },
        {
          part_number: '100/2019', quantity: 550, best_before: '2022-10-12', producer: 'Mlyn tadeusz Rybak'
        },
        {
          part_number: '21/02/2018', quantity: 4000, best_before: '2020-10-10', producer: 'mlyn xyz'
        },
        {
          part_number: '21/03/2018', quantity: 3000, best_before: '2021-10-10', producer: 'mlyn Kordesmajer'
        }
      ]
    },
    {
      mode: 'span',
      label: 'Cukier',
      html: false,
      children: [
        {
          part_number: '100/2019', quantity: 6550, best_before: '2022-12-30', producer: 'Cukrowania z'
        },
        {
          part_number: '21/01/2018', quantity: 4000, best_before: '2020-11-20', producer: 'Cukrownia b'
        }
      ]
    },
    {
      mode: 'span',
      label: 'Glukoza krystaliczna',
      html: false,
      children: [
        {
          part_number: '20-02-2024', quantity: 6550, best_before: '2021-09-25', producer: 'Peppes sp. z o.o.'
        }
      ]
    },
    {
      mode: 'span',
      label: 'Proszek do pieczenia',
      html: false,
      children: [
        {
          part_number: 'AA1/2019', quantity: 500, best_before: '2022-12-30', producer: 'Producent X'
        },
        {
          part_number: 'BB2/03/2018', quantity: 800, best_before: '2023-11-20', producer: 'Producent Y'
        }
      ]
    },
    {
      mode: 'span',
      label: 'Kakao 22%',
      html: false,
      children: [
        {
          part_number: '10D/2017', quantity: 5400, best_before: '2023-12-30', producer: 'Producent Kakao X'
        },
        {
          part_number: 'B2/03/2018', quantity: 800, best_before: '2023-04-03', producer: 'Producent Kakao Z'
        }
      ]
    },
    {
      mode: 'span',
      label: 'Aromat waniliowy 200407K',
      html: false,
      children: [
        {
          part_number: '200C', quantity: 200, best_before: '2021-12-30', producer: 'Ipra'
        },
        {
          part_number: '300C', quantity: 100, best_before: '2023-04-03', producer: 'Ipra'
        }
      ]
    },
    {
      mode: 'span',
      label: 'Naturalny proszek cytrynowy',
      html: false,
      children: [
        {
          part_number: '700A', quantity: 200, best_before: '2021-12-30', producer: 'Elena'
        },
        {
          part_number: '200B', quantity: 100, best_before: '2023-04-03', producer: 'Liogam'
        }
      ]
    },
    {
      mode: 'span',
      label: 'Mleko w proszku pełne',
      html: false,
      children: [
        {
          part_number: 'AAA', quantity: 2500, best_before: '2020-12-30', producer: 'Mleczarnia Mlekovita'
        },
        {
          part_number: 'CCC', quantity: 3000, best_before: '2019-04-03', producer: 'Zakład mleczarski Śnieżka'
        }
      ]
    }

    ]

  },
  getters: {
    columns_actual_stock: state => state.columns_actual_stock,
    rows_actual_stock: state => state.rows_actual_stock,
    get_recive_options: state => state.recive_options,
    get_actual_recive_option: state => state.recive_option,
    get_log_data: state => state.log_data,
    is_logged: state => state.is_logged
  },
  mutations: {
    set_login_status: (state, payload) => {
      state.is_logged = payload
    },
    update_recive_option: (state, payload) => {
      state.recive_option = payload
    },
    update_new_stock: (state, {productname, partnumber, quantity, bestbefore, producer}) => {
      let obj = {
        mode: 'span',
        label: productname,
        html: false,
        children: [{part_number: partnumber, quantity: quantity, best_before: bestbefore, producer: producer}]
      }
      state.rows_actual_stock.push(obj)
    },
    update_existing_stock: (state, {productname, partnumber, quantity, bestbefore, producer}) => {
      for (let i = 0; i < state.rows_actual_stock.length; i++) {
        if (state.rows_actual_stock[i].label === productname) {
          let obj = {
            part_number: partnumber,
            quantity: quantity,
            best_before: bestbefore,
            producer: producer
          }
          state.rows_actual_stock[i].children.push(obj)
        }
      }
    },
    sort_stock_by_date: (state, {id}) => {
      state.rows_actual_stock[id].children.sort(function (a, b) {
        return new Date(a.best_before) - new Date(b.best_before)
      })
    }
  },
  actions: {}
}
