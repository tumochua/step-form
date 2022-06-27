<template>
  <div>
    <input :type="listStep.type" />
  </div>
</template>

<script>
export default {
  props: {
    listStep: Array || Object,
    default: [],
  },
  created() {
    // console.log("check : ", this.listStep);
  },
};
</script>

<style scoped></style>
