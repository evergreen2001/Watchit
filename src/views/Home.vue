<template>
  <div class="container">
    <h1>Home Cmp</h1>

    <section class="py-5">
      <h1>Popular Movies</h1>

      <!-- <input
        type="text"
        placeholder="enter movie"
        v-model="query"
        @keyup="getResult(query)"
      /> -->

      <!-- <div v-for='result in results' :key='result.id'>
   <p>{{result.title}}</p>
   <img v-bind:src="'http://image.tmdb.org/t/p/w500/' +    result.poster_path" width='100px'>
  </div> -->
      <div class="row">
        <div class="col-lg-2 mt-3" v-for="result in results" :key="result.id">
          <div class="card">
            <img
              class="card-img-top"
              :src="'https://image.tmdb.org/t/p/w500/' + result.poster_path"
              alt=""
            />

            <div class="card-body">
              <h6 class="card-title">{{ result.title }}</h6>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      results: [],
      query: "",
    };
  },
  created() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=e8f58896bca90b05f93d41fee275ea29"
      )
      .then((res) => {
        this.results = res.data.results;

        console.log(res.data.results);
      });
  },

  methods: {
    // getResult(query) {
    //   axios
    //     .get(
    //       "https://api.themoviedb.org/3/search/movie?api_key=e8f58896bca90b05f93d41fee275ea29&query=" +
    //         query
    //     )
    //     .then((res) => {
    //       this.results = res.data.results;
    //       console.log(this.results);
    //     });
    // },
  },
};
</script>

<style scoped>

.card{
  outline:none;
 
}
</style>