
<template>
  <div class="container">
    <button class="btn shadow btnx" @click='$router.go(-1)'>
 <i class="fas fa-long-arrow-alt-left"> Back</i></button>


   <h1> movies details</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MoviesDetals',
  created() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.$route.params.movies}?api_key=e8f58896bca90b05f93d41fee275ea29&language=en-US`
      )
      .then((res) => {
        // this.results = res.data.results;
        console.log(res.data);
        // console.log(this.$route.params.movies)
      });

    
  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
   
  },
}
</script>

<style >

</style>

