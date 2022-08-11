<template>
  <p class="card-sub-heading-song">{{ bandSong }}</p>
</template>

<script>
export default {
  name: "BandSong",
  props: {
    bandSong: String,
  },
};
</script>

<style></style>
