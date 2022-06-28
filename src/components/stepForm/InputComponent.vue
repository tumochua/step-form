<template>
  <div>
    <!-- <input :type="listStep.type" v-model="handleListStep" /> -->

    <input
      :type="listStep.type"
      :value="listStep.model"
      @input="handeOnInput"
    />

    <!-- <div v-if="currentPage === 2">
      <div>tumochua2</div>
    </div> -->
    <!-- <div v-if="listStep.stepId === currentPage">
      <div>tumochua2</div>
    </div> -->

    <!-- <div class="step-control">
      <input
        :class="{ error: field.error }"
        v-model="valueInput"
        :type="field.type"
        v-if="field.type == 'text' || field.type == 'email'"
        @blur="handleInput($event)"
        @input="updateUserObj()"
      />
      <div class="select" v-else-if="field.type == 'select'">
        <div>{{ field.label }}</div>
        <select name="" id="">
          <option selected disabled hidden value="">
            {{ field.selectTitle }}
          </option>
          <option
            v-for="option in field.optionData"
            :value="option"
            :key="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
      <div class="checkbox" v-else-if="field.type == 'checkbox'">
        <input :id="field.title" :type="field.type" />
        <label :for="field.title">{{ field.title }}</label>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    listStep: {
      type: Array || Object,
      default: [],
    },
    currentPage: {
      type: Number,
    },
  },
  // props: {
  //   field: {
  //     type: Object,
  //   },
  //   name: {
  //     type: String,
  //   },
  // },
  data() {
    return {
      formStep: {
        error: false,
      },
    };
  },
  computeds: {
    valueInput: {
      hanldeListStep() {
        return this.listStep.model;
      },
      setValue(value) {
        return this.$store.dispatch("changeInput", { name: this.name, value });
      },
    },
  },
  created() {
    console.log("check props :", this.listStep);
  },
  methods: {
    updateUserObj() {
      this.$store.commit("updateUserObj", { name: this.name });
    },
    handleInput(e) {
      this.$store.commit("changeInput", {
        name: this.name,
        value: e.target.value,
      });
    },
    handeOnInput(event) {
      // const value = e.target.value;
      this.$emit("handeOnInput", event.target.value);
    },
  },
};
</script>

<style scoped></style>
