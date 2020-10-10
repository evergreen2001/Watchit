
<template>
  <div>
   
   
<div class="hero">

<img src="../assets/bg.jpg" alt="image"/>
  <div class="overlay"></div>
<div class="container"> 


 <h1> Welcome.</h1>
Millions of movies, TV shows and people to discover. Explore now.
</div>
</div>
  </div>
</template>

<script>


export default {
  name: 'HeroSection',
  created() {

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

<style scoped>

.hero{
  width:100%;
  background-color: blue;
  position: relative;
  opacity:2;
  height:400px;
  display:flex;
  color:#fff;
  font-weight: 700;
  padding-top:40px;
  background: black;
    overflow: hidden;
  /* background:linear-gradient(to right, rgba(var(--tmdbDarkBlue), 0.8) 0%, rgba(var(--tmdbDarkBlue), 0) 100%), url('//image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/mK286PAkhgLJqk5cO0BCmFLkNE7.jpg') */
}.hero img{
  object-fit: cover;
   opacity: 0.4;
}

/* .overlay{
  position:absolute;
  background-image: url(../assets/bg.jpg);
} */
</style>

