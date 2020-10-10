<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed">
  <a class="navbar-brand">Watchit</a>
  <button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <!-- <div id="my-nav" class="collapse navbar-collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Item 1 <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Item 2</a>
      </li>
    </ul>
  </div> -->
</nav>
 
    <router-view />
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
  background-color: goldenrod;
 
}
</style>