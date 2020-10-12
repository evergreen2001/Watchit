<template>
  <div>
     <div class="loaderFlex d-flex mt-5">
      <div v-if="loader" class="loader"></div>
    </div>

    <div
      class="movie-details"
      v-for="(detail, index) in details"
      :key="detail.id"
      :index="index"


      :style="{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${detail.backdrop_path})` }"
  >

  <div class="overlay">

     <button class="btn shadow btnx" @click="$router.go(-1)">
        <i class="fas fa-long-arrow-alt-left"> Back</i>
      </button>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 rounded py-4">
            <img
              :src="'https://image.tmdb.org/t/p/w500/' + detail.poster_path"
              alt="image"
              class="img-fluid"
            />
          </div>

          <div class="col-lg-6 right py-4">
            <h1 class="title">{{ detail.title }}</h1>
            <p>{{ detail.tagline }}</p>
            <span> {{ new Date(detail.release_date).getFullYear() }} </span>

            <span>   {{ detail.runtime}}Min </span>
            <!-- <span>   {{ detail.runtime }}Min </span> -->


            <p class="mt-3">{{ detail.overview }}</p>
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
  created() {
    this.loader = true;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movies},videos?api_key=e8f58896bca90b05f93d41fee275ea29&language=en-US`
      )
      .then((res) => {

    
        this.details = res.data;


        console.log(this.details);
        

        // console.log(this.$route.params.movies)
      })
      .catch((e) => {
        alert(e);
      })
      .finally(() => {
        this.loader = false;
      });
  },
  data() {
    return {
      loader: false,
      details: [],
    };
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
  background-size:cover;
  position: relative;
    min-height: 700px;

 
}

.right {
  /* background-color:gold; */
  color: #fff;
}
.right span{
  margin-right: 20px;
}

.title {
  font-size: 33px;
}
.overlay{
      background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 700px;
}

</style>
