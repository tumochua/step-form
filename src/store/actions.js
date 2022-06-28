const actions = {
  backStep({ commit }) {
    commit("backStep");
  },
  endStep({ commit }) {
    commit("endStep");
  },
  reset({ commit }) {
    commit("reset");
  },
  changeInput({ commit }) {
    commit("changeInput");
  },
};

export default actions;
