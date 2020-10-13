<template>
  <div>
    <button class="btn shadow btnx" @click="$router.go(-1)">
      <i class="fas fa-long-arrow-alt-left"> Back</i>
    </button>
    <div class="loaderFlex d-flex ">
      <div v-show="loader" class="loader mt-5 py-5"></div>
    </div>

    <div
      class="movie-details"
      :style="{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${details.backdrop_path})`,
      }"
    >
      <div class="overlay">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 rounded py-4">
              <img
                :src="'https://image.tmdb.org/t/p/w500/' + details.poster_path"
                alt="image"
                class="img-fluid"
              />
            </div>

            <div class="col-lg-6 right py-4">
              <h1 class="title">{{ details.title }}</h1>
              <p>{{ details.tagline }}</p>
              <span>
                {{ new Date(details.release_date).getFullYear() }}
              </span>

              <span> {{ details.runtime }}Min </span>
              <span v-for="genre in details.genres" :key='genre'> {{ genre.name }}</span>

            

              <p class="mt-3">{{ details.overview }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MoviesDetals",

  data() {
    return {
      loader: false,
      details: {},
    };
  },

  created() {
    this.loader = true;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movies}?api_key=e8f58896bca90b05f93d41fee275ea29&language=en-US`
      )
      .then((response) => {
        this.details = response.data;

        console.log(response.data);

        // console.log(this.$route.params.movies)
      })
      .catch((e) => {
        alert(e);
      })
      .finally(() => {
        this.loader = false;
      });
  },
  props: {},
  methods: {},
};
</script>

<style>
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #2b3845;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  transition: 1s ease;
}
.borders .loader {
  width: 60px;
  height: 60px;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loaderFlex {
  display: flex;
  justify-content: center;
}

.movie-details {
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  min-height: 600px;


}.movie-details img{
  border-radius: 30px;
}


.right {
  /* background-color:gold; */
  color: #fff;
}
.right span {
  margin-right: 20px;
}

.title {
  font-size: 33px;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 600px;
  opacity: 99;
}
</style>
