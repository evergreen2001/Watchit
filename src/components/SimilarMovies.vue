<template>
    


    <div class="similar py-5" v-if="this.similarmovies" > 
        <div class="container ">

<h1> Similar Movies</h1>


<div  >
<div class="row py-2" >
        <div class="col-lg-2 col-md-6 mt-5 py-5" v-for="similarmovie in similarmovies" :key="similarmovie.id">
          <div class="card ">
            <img
              class="card-img-top"
              :src="'https://image.tmdb.org/t/p/w500/' + similarmovie.poster_path"
              alt="image"
            />

            <div class="card-body">
        <!-- <a :href="{name:'moviesdetails' , params:{movies:similarmovie.id}}"> -->

              <h6 class="card-title">{{ similarmovie.title }}</h6>
              <h6 class="card-title">{{ new Date(similarmovie.release_date).toLocaleDateString(
                
                'en-gb',
  {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) }}</h6>

        <!-- </a> -->

            </div>
          </div>
        </div>
      </div>

</div>
        </div>
    </div>
</template>
<script>
export default {

    data(){

        return{


        }
    } , 

    props:{
similarmovies:Array
    }
    
}
</script>

<style scoped>
.similar{
  background-color: rgba(47, 58, 216, 0.829);

}
</style>