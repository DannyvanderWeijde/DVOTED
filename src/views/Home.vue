<template>
  <div>
    <header class="header">
      <nav-component></nav-component>
    </header>

    <main class="home">

    </main>
  </div>
</template>

<script>
  import navComponent from '../components/Nav';

  export default {
    name: "Home",

    components: {
      navComponent,
    }
  }

</script>
