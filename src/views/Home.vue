<template>
  <div>
    <nav-component></nav-component>
    
    <main class="home">
      <landing-page></landing-page>
    </main>
  </div>
</template>

<script>
  import navComponent from '../components/Nav';
  import LandingPage from '../components/LandingPage';

  export default {
    name: "Home",

    components: {
      navComponent,
      LandingPage,
    }
  }

</script>
