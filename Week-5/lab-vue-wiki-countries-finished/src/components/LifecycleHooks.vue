<template>
  <h1>Lifecycle Hooks</h1>
</template>

<script>
export default {
  name: "Lifecycle Hooks",

  beforeCreate: function () {
    console.log("beforeCreate()");
  },

  created: function () {
    console.log("created()");
  },

  beforeMount: function () {
    console.log("beforeMount()");
  },

  mounted: function () {
    setTimeout(function () {
      console.log("mounted()");
    }, 3000);
  },

  beforeUpdate: function () {
    console.log("beforeUpdate()");
  },
  updated: function () {
    console.log("updated()");
  },
};
</script>

<style></style>
