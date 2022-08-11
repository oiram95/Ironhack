<template>
  <div>
    <img :src="bandImage" alt="" class="card-image" />
  </div>
</template>

<script>
export default {
  name: "BandImage",
  props: {
    bandImage: String,
  },
};
</script>

<style></style>
