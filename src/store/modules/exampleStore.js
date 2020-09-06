const state = {
  count: 0,
};

const mutations = {
  increment: (state) => {
    state.count += 1;
  },
};
const actions = {
  increment(context) {
    context.commit('increment');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
