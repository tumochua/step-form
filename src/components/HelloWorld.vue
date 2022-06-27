<template>
  <progress-vue></progress-vue>
  <header-vue></header-vue>
  <form-validation-ccopy-vue></form-validation-ccopy-vue>
  <!-- <form-validation></form-validation> -->
</template>

<script>
import HeaderVue from "./stepForm/Header.vue";

import ProgressVue from "./stepForm/Progress.vue";
// import formValidation from "./stepForm/FormValidation.vue";
import FormValidationCcopyVue from "./stepForm/FormValidationCcopy.vue";
export default {
  name: "HelloWorld",
  components: {
    HeaderVue,
    ProgressVue,
    // formValidation,
    FormValidationCcopyVue
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    handleIncrement() {
      console.log("");
    },
  },
  created() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app {
  width: 1200px;
  margin: 0 auto;
}
</style>
