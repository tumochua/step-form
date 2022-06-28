const mutations = {
  backStep(state) {
    if (state.currentPage === 3) {
      return;
    }
    state.currentPage++;
  },
  endStep(state) {
    if (state.currentPage === 1) {
      state.currentPage = 1;
    } else {
      state.currentPage--;
    }
  },
  reset(state) {
    state.currentPage = state.currentPage = 1;
  },
  changeInput(state, { name, value }) {
    const currForm = state.formStep[state.currentStep - 1];
    console.log("check mution currform :", currForm);
    currForm.listField[name].value = value;
    currForm.listField[name].validate();
  },
};

export default mutations;
