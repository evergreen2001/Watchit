<template>
  <div>
 
 <transition name="slide-fade">
    <router-view />
 </transition>
  </div>
</template>

<script>

export default {
  components(){

  },
  data() {
    return {
      apikey: "e8f58896bca90b05f93d41fee275ea29",
    };
  },
};
</script>

<style>

body{
 
  font-family: 'Staatliches', cursive;
 
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

