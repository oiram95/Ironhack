<template>
  <div>
    <p class="card-heading">{{ bandInfo.name }}</p>
    <p class="card-sub-heading-genre">{{ bandInfo.genre }}</p>
  </div>
</template>

<script>
export default {
  name: "BandInfo",
  props: {
    bandInfo: Object,
  },
};
</script>

<style></style>
