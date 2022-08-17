<template>
  <div class="container">
    <h1 class="text-center my-3">Country List</h1>
    <div v-if="countries" class="row">
      <div class="col-4">
        <ul class="list-group">
          <router-link
            :to="`/list/${country.alpha3Code}`"
            v-for="(country, index) in countries"
            :key="index"
          >
            <li
              class="list-group-item d-flex flex-column justify-content-center"
            >
              <img
                v-bind:src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
                alt=""
                class="wuTangImg"
              />
              <p class="text-center fw-bold">{{ country.name.common }}</p>
            </li>
          </router-link>
        </ul>
      </div>
      <div class="col-8">
        <router-view />
      </div>
    </div>
    <div v-else class="row">
      <Spinner text="Loading Countries..." />
    </div>
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import { ref } from "vue";
export default {
  name: "CountriesList",
  components: { Spinner },

  setup() {
    //data properties
    const countries = ref(null);

    //methods/functions
    const fetchCountries = async () => {
      const response = await fetch(
        "https://ih-countries-api.herokuapp.com/countries"
      );

      const finalResponse = await response.json();

      const sortedCountries = finalResponse.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
      });

      countries.value = sortedCountries;
    };

    fetchCountries();

    return { countries, fetchCountries };
  },
  // data() {
  //   return {
  //     // definir un valor de dato estilo null para poder recibir la info del API!
  //     countries: null,
  //   };
  // },

  // methods: {
  //   async fetchCountries() {
  //     const response = await fetch(
  //       "https://ih-countries-api.herokuapp.com/countries"
  //     );

  //     const finalResponse = await response.json();
  //     // console.log(finalResponse);

  //     this.countries = finalResponse.sort((a, b) => {
  //       return a.name.common.localeCompare(b.name.common);
  //     });
  //   },
  // },

  // USamos el created-hook [created()] para hacer nuestra llamada inciial a la base de datos y nos traemos esa info antes de que se pinte algo en el UI.
  // created() {
  //   this.fetchCountries();
  // },
};
</script>

<style scoped>
.wuTangImg {
  width: 150px;
}
</style>
