<template>
    <nav class="nav">
        <div class="nav-socials">

        </div>
        <img src="../assets/images/dvoted-logo.webp" alt="dvoted logo">
        <router-link class="nav__item" v-for="(link, index) in links" :key="index" :to="{link}">{{ index }}</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Nav',

    data() {
        return {
            links: {'Home': '/'}
        }
    }
}
</script>