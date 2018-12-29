module.exports = {
  namespaced: true,
  state: {
    defined_columns: [],
    defined_rows: [],
    recipe_links: [
      {
        to: '/production/recipes/display',
        label: 'ciasto czekoladowe',
        id: 1,
        name: 'display'
      },
      {
        to: '/production/recipes/display',
        label: 'ciasto cytrynowe',
        id: 2,
        name: 'display'
      }
    ],
    rows_for_single_recipe: [
      {
        product: 1,
        array_of_rows: [
          {
            ingredients: 'Mąka pszenna typ 500',
            quantity_grams: 600,
            quantity_percent: 60,
            recipe_1kg: 0.6
          },
          {
            ingredients: 'Cukier',
            quantity_grams: 300,
            quantity_percent: 30,
            recipe_1kg: 0.3
          },
          {
            ingredients: 'Proszek do pieczenia',
            quantity_grams: 10,
            quantity_percent: 1,
            recipe_1kg: 0.01
          },
          {
            ingredients: 'Kakao 22%',
            quantity_grams: 85,
            quantity_percent: 8.5,
            recipe_1kg: 0.085
          },
          {
            ingredients: 'Aromat waniliowy 200407K',
            quantity_grams: 5,
            quantity_percent: 0.5,
            recipe_1kg: 0.005
          }
        ]
      },
      {
        product: 2,
        array_of_rows: [
          {
            ingredients: 'Mąka pszenna typ 500',
            quantity_grams: 600,
            quantity_percent: 60,
            recipe_1kg: 600
          },
          {
            ingredients: 'Cukier',
            quantity_grams: 200,
            quantity_percent: 20,
            recipe_1kg: 200
          },
          {
            ingredients: 'Proszek do pieczenia',
            quantity_grams: 10,
            quantity_percent: 1,
            recipe_1kg: 10
          },
          {
            ingredients: 'Naturalny proszek cytrynowy',
            quantity_grams: 30,
            quantity_percent: 3,
            recipe_1kg: 30
          },
          {
            ingredients: 'Mleko w proszku pełne',
            quantity_grams: 160,
            quantity_percent: 16,
            recipe_1kg: 160
          }
        ]
      }
    ],
    columns_for_single_recipe: [
      {
        label: 'Składniki',
        field: 'ingredients'
      },
      {
        label: 'Ilość w gramach',
        field: 'quantity_grams'
      },
      {
        label: 'Zawartość w procentach [%]',
        field: 'quantity_percent'
      },
      {
        label: 'Receptura na 1 kg (w gramach)',
        field: 'recipe_1kg'
      }
    ]
  },
  getters: {
    get_recipe_links: state => state.recipe_links,
    get_columns: state => state.columns_for_single_recipe,
    get_rows: state => state.rows_for_single_recipe
  },
  mutations: {
    add_new_link: (state, {newlink}) => {
      console.log(newlink)
      state.recipe_links.push(newlink)
    },
    add_rows_for_single_recipe: (state, {id, arraytostore}) => {
      let obj = {
        product: id,
        array_of_rows: arraytostore
      }
      state.rows_for_single_recipe.push(obj)
    }
  },
  actions: {
  }
}
