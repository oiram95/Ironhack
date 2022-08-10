<template>
  <h1>Props Class</h1>
  <Greet name="Jarko" lastName="Garrido" />
  <Greet name="Aleix" lastName="Abuli" />
  <Greet name="Pauman" lastName="Ibañez" />
  <!-- <Greet :name="name" :lastName="lastName" />  -->
  <Article
    title="Wu Tang Clan Will never die"
    :likes="200"
    :isPublished="true"
    id="my-article"
    class="inigo-montoya"
  />
</template>

<script>
import Greet from "./components/Greet.vue";
import Article from "./components/Article.vue";
export default {
  name: "App",
  components: {
    Greet,
    Article,
  },
  data() {
    return {
      name: "Gustavo",
      lastName: "Cerati",
    };
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
