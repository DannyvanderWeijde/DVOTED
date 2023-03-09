<template>
  <div>
    <nav-component></nav-component>
    
    <main class="home">
      <landing-page></landing-page>
    </main>
  </div>
</template>

<script>
  import navComponent from '../components/NavComponent';
  import LandingPage from '../components/LandingPageComponent';

  export default {
    name: "HomeComponent",

    components: {
      navComponent,
      LandingPage,
    }
  }

</script>
