<template>
  <header class="header">
    <navComponent></navComponent>
  </header>
  <main class="main">
    <router-view />
  </main>
</template>

<script>
  import navComponent from './components/Nav'

  export default {
    name: "App",

    components: {
      navComponent,
    }
  }
</script>

<style>
  @import './assets/app.css';
</style>