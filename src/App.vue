<template>
  <header class="header">
    <nav class="nav" id="nav">
      <router-link class="nav__item" to="/">Home</router-link>
    </nav>
  </header>
  <main class="main">
    <router-view />
  </main>
</template>
<script>
export default {
  name: "App",
};
</script>
<style>
  @import './assets/app.css';
</style>