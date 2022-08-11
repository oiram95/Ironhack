<template>
  <!-- <HelloWorld /> -->
  <ComputedClass />
</template>

<script>
import ComputedClass from "./components/ComputedClass.vue";

export default {
  name: "App",
  components: {
    ComputedClass,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
