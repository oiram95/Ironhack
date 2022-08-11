<template>
  <div class="background">
    <BandCard
      v-for="(band, index) in bands"
      :key="index"
      :bandInfo="band.bandInfo"
      :bandSong="band.popularSong"
      :bandSongInfo="band.popularSongInfo"
    />
  </div>
</template>

<script>
import BandCard from "./components/BandCard.vue";
export default {
  components: {
    BandCard,
  },
  data: () => ({
    bands: [
      {
        bandInfo: {
          name: "The Doors",
          image:
            "https://ballesterockmusicdotcom.files.wordpress.com/2016/04/the-doors-logo.jpeg?w=640",
          genre: "Rock n Roll",
        },
        popularSong: "L.A Woman",
        popularSongInfo:
          "L.A. Woman is the sixth studio album by the American rock band the Doors, released on April 19, 1971, by Elektra Records. It is the last to feature lead singer Jim Morrison during his lifetime due to his death three months after the album's release, though he would posthumously appear on the 1978 album An American Prayer. Even more so than its predecessors, the album is heavily influenced by blues. It was recorded without record producer Paul A. Rothchild after he fell out with the group over the perceived lack of quality of their studio performances. Subsequently, the band co-produced the album with longtime sound engineer Bruce Botnick.",
      },
      {
        bandInfo: {
          name: "Led Zeppellin",
          image:
            "https://extrachill.com/wp-content/uploads/2021/03/led-zeppelin-angel-logo.jpeg",
          genre: "Rock n Roll",
        },
        popularSong: "Whole Lotta Love",
        popularSongInfo:
          "Whole Lotta Love is a song by English rock band Led Zeppelin. It is the opening track on the band's second album, Led Zeppelin II, and was released as a single in 1969 in several countries; as with other Led Zeppelin songs, no single was released in the United Kingdom. In the United States, it became their first hit and was certified gold. Parts of the song's lyrics were adapted from Willie Dixon's 'You Need Love', recorded by Muddy Waters in 1962; originally uncredited to Dixon, a lawsuit in 1985 was settled with a payment to Dixon and credit on subsequent releases.",
      },
    ],
  }),
};
</script>

<style>
.background {
  @apply flex h-screen items-center justify-around bg-indigo-50 px-4;
}

.card-container {
  @apply max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl;
}

.card-image {
  @apply h-auto w-full;
}

.card-body-container {
  @apply p-5;
}

.card-heading {
  @apply font-bold text-gray-700;
}

.card-container {
}

.card-sub-heading-genre {
  @apply text-xs mb-5 text-gray-700;
}

.card-heading-popular-song {
  @apply font-bold text-gray-700 text-sm;
}
.card-heading-popular-song-info {
  @apply text-gray-700 text-sm;
}
</style>
