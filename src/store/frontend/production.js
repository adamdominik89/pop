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
        name: 'display',
        additional_data: 'ciasto_czekoladowe'
      },
      {
        to: '/production/recipes/display',
        label: 'ciasto cytrynowe',
        id: 2,
        name: 'display',
        additional_data: 'ciasto_cytrynowe'
      }
    ]
  },
  getters: {
    get_recipe_links: state => state.recipe_links
  },
  mutations: {
  },
  actions: {
  }
}
