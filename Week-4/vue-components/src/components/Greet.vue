<template>
  <h1>Hello {{ name }} {{ lastName }}</h1>
</template>

<script>
export default {
  name: "Greet",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  props: ["name", "lastName"],
};
</script>

<style></style>
