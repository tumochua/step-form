<template>
  <div>
    <div>
      <div v-for="listStep in listStepForm.flat(1)" :key="listStep">
        <div v-if="state.currentPage === listStep.stepPage">
          <div>
            <label>{{ listStep.name }}</label>
            <input-component :listStep="listStep"></input-component>
          </div>
        </div>
      </div>
    </div>
    <!-- <div>{{ state }}</div> -->

    <!-- <div
      class="body-form"
      v-for="listStep in state.listSteps"
      :key="listStep.stepPage"
    >
      <div v-if="listStep.stepPage === state.currentPage">
        <div v-for="(item, index) in listStep.forms" :key="index">
          <div>{{ item }}</div>
          <div v-if="listStep.stepPage === state.currentPage">
            <label>{{ item.name }}</label>
            <input-component :listStep="item"></input-component>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import InputComponent from "./InputComponent.vue";
export default {
  name: "FormValidation",
  components: {
    InputComponent,
  },
  data() {
    return {
      state: {
        currentPage: 1,
        progress: 0,
        listSteps: [
          {
            status: false,
            text: "about you",
            forms: [
              {
                stepPage: 1,

                model: "tumochua",
                name: "name",
                type: "text",
                rule: "required",
              },
              {
                stepPage: 1,

                model: "",
                name: "email",
                type: "text",
                rule: "required|email",
              },
            ],
          },
          {
            status: false,
            text: "about your company",
            forms: [
              {
                stepPage: 2,

                model: "",
                name: "companyname",
                type: "text",
                rule: "required",
              },
              {
                stepPage: 2,

                model: "",
                name: "numberofemployee",
                type: "text",
                rule: "required|numeric",
              },
            ],
          },
          {
            status: false,
            text: "finishing up",
            forms: [
              {
                stepPage: 3,

                model: "",
                name: "select option",
                type: "select",
                rule: "required",
              },
              {
                stepPage: 3,

                model: "",
                name: "checkbox option",
                type: "checkbox",
                rule: "required",
              },
            ],
          },
        ],
      },
    };
  },
  computed: {
    ...mapState({
      currentPage: (state) => state.currentPage,
    }),
    listStepForm() {
      return this.state.listSteps.map((listStep) => {
        console.log("check listStepForm ; ", listStep);
        return listStep.forms;
      });
    },
  },
  // computed: {
  //   ...mapState({
  //     currentPage: (state) => state.currentPage,
  //   }),
  //   termsError() {
  //     return this.step.validated && !this.step.termsState;
  //   },
  // },
  // methods: {
  //   onSubmit(values) {
  //     console.log(JSON.stringify(values, null, 2));
  //   },
  //   handleStepBack(value) {
  //     if (value.name.trim() === "" && value.email.trim() === "") {
  //       this.step.errorForm = true;
  //     }
  //     const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //     if (value.name.trim() && regex.test(value.email)) {
  //       this.$store.dispatch("backStep");
  //       this.step.errorForm = false;
  //     }
  //   },
  //   handleStepBack2(value) {
  //     const validation =
  //       isNaN(value.numberofemployee) || value.numberofemployee > 1;
  //     if (value.companyname.trim() && validation) {
  //       this.$store.dispatch("backStep");
  //       return false;
  //     }
  //   },
  //   handleStepEnd() {
  //     this.$store.dispatch("endStep");
  //   },
  //   isRequiredName(value) {
  //     if (value) {
  //       this.step.errorForm = false;
  //     }
  //     if (value && value.trim()) {
  //       return true;
  //     }
  //     return "This is required name";
  //   },
  //   isRequiredCompanyname(value) {
  //     if (value && value.trim()) {
  //       return true;
  //     }
  //     return "This is required";
  //   },
  //   validateEmail(value) {
  //     if (!value) {
  //       return "This field is required Email";
  //     }
  //     const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //     if (!regex.test(value)) {
  //       return "This field must be a valid email";
  //     }
  //     return true;
  //   },
  //   isRequiredNumbe(value) {
  //     if (+value && value.trim()) {
  //       return true;
  //     }
  //     return "This is required";
  //   },
  //   handleTermsState() {
  //     this.step.validated = false;
  //   },
  //   handleSubmit() {
  //     this.step.validated = true;
  //     if (!this.step.selectOption) {
  //       this.step.selectRequid = true;
  //     } else {
  //       this.step.selectRequid = false;
  //     }
  //   },
  //   hanldeReset() {
  //     this.$store.dispatch("reset");
  //     this.step = {};
  //   },
  // },
};
</script>

<style scoped lang="scss">
.body-form {
  margin-top: 20px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgb(0 0 0 / 20%), 6px 12px 20px rgb(0 0 0 / 10%);
  margin-top: 15px;
  padding: 20px;
  .btn-next {
    margin: 0 auto;
    display: inline-block;
    border: unset;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    padding: 8px 24px;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
    transition: box-shadow 0.35s ease-out;
    margin-left: 16px;
    background-color: #1e68cf;
  }
  .title {
    width: 94%;
    text-align: left;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .btn-previous {
    background-color: #72e6b1;
    display: inline-block;
    border: unset;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;
    padding: 8px 24px;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 1px 1px 10px rgb(0 0 0 / 40%);
    transition: box-shadow 0.35s ease-out;
  }
  .form-control {
    color: #586068;
    font-size: 16px;
    width: 90%;
    padding: 8px 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: 3px solid transparent;
    transition: all 0.2s ease;
  }
  .select-step3 {
    display: block;
    width: 100%;
    height: 100%;
    padding: 10px 12px;
    border-radius: 5px;
    margin: 10px 0px;
  }
  .errform {
    border: 1px solid red;
  }
  .error-form {
    color: red;
  }
  .isValidation {
    border: 1px solid red;
  }
}
</style>
