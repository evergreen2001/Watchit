<template>
    


    <div class="container">

<h1> Similar Movies</h1>


<div v-for="similarmovie in similarmovies" :key="similarmovie.id">

{{similarmovie.id}}

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