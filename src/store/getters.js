const getters = {
  getDataFroms(state) {
    return state.formStep;
  },
  handleValidation(state) {
    return state.listStep.filter((item, index) => item.form[index + 1]);
  },
  mapcurrentPage(state) {
    return state.currentPage;
  },
  getListField(state) {
    return state.formStep.map((item) => item.listField);
  },
  // handleProgress(state) {
  //   Object.keys(state.currentPage).length;
  //   return state;
  // },
};

export default getters;
