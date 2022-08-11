<template>
  <div class="card-background">
    <div class="card-container">
      <BandImage :bandImage="bandInfo.image" />
      <div class="card-body-container">
        <BandInfo :bandInfo="bandInfo" />
        <BandSong :bandSong="bandSong" />
        <BandSongInfo :bandSongInfo="bandSongInfo" />

        <p class="card-sub-heading">song info</p>
      </div>
    </div>
  </div>
</template>

<script>
import BandInfo from "./BandInfo.vue";
import BandSong from "./BandSong.vue";
import BandSongInfo from "./BandSongInfo.vue";
import BandImage from "./BandImage.vue";
export default {
  name: "BandCard",
  components: {
    BandInfo,
    BandSong,
    BandSongInfo,
    BandImage,
  },
  props: {
    bandInfo: Object,
    bandSong: String,
    bandSongInfo: String,
    bandImage: String,
  },
};
</script>

<style></style>
