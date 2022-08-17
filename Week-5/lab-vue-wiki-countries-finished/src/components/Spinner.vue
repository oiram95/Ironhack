<template>
  <div class="d-flex flex-column">
    <div class="d-flex justify-content-center mb-4">
      <div class="spinner-border" role="status"></div>
    </div>
    <p class="text-center">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Spinner",
  props: {
    text: String,
  },
};
</script>

<style></style>
