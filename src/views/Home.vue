<template>
  <div class="home">
    <Herosection />

    <section class="py-5 container">
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
      <h1>Popular Movies</h1>

      <div class="row">
        <div class="col-lg-2 mt-3" v-for="result in results" :key="result.id">
          <div class="card">
            <img
              class="card-img-top"
              :src="'https://image.tmdb.org/t/p/w500/' + result.poster_path"
              alt="image"
            />

            <div class="card-body">
        <router-link :to="{name:'moviesdetails' , params:{movies:result.id}}">

              <h6 class="card-title">{{ result.title }}</h6>
              <h6 class="card-title">{{ new Date(result.release_date).toLocaleDateString(
                
                'en-gb',
  {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) }}</h6>

        </router-link>

            </div>
          </div>
        </div>
      </div>

      <!-- latest -->
      <h1>Popular TV series</h1>

      <div class="row pt-5">
        <div
          class="col-lg-2 mt-5"
          v-for="result in latestresults"
          :key="result.id"
        >
          <div class="card">
            <img
              class="card-img-top"
              :src="'https://image.tmdb.org/t/p/w500/' + result.poster_path"
              alt=""
            />

            <div class="card-body">
              <h6 class="card-title">{{ result.name }}</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Herosection from "../components/HeroSection";
export default {
  components: {
    Herosection,
  },
  data() {
    return {
      results: [],
      latestresults: [],
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

        // console.log(res.data.results);
      });

    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=e8f58896bca90b05f93d41fee275ea29&language=en-US&page=1"

        // https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
      )
      .then((res) => {
        this.latestresults = res.data.results;

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
body{
 
  font-family: 'Staatliches', cursive;
 
}
.home {
  background-color: rgba(47, 58, 216, 0.829);
  
 
  font-family: 'Staatliches', cursive;
 

}
h1 {
  color: #fff;
}
.card {
  outline: none;
  border-radius: 20px;
  max-height: 350px;
}
.card img {
  outline: none;
  border-radius: 20px;
}

.card:hover {
  width: 100%;
}

h6 {
  color: dimgrey;
  font-size: 14px;
}
</style>
