<template>
    <header class="header">
        <div class="socials">
            <div class="socials__container">
                <div class="socials__title-container">
                    <span class="socials__title">
                        Check out the freebies, especially made for you
                    </span>
                    <div class="socials__icon-container">
                        <font-awesome-icon class="socials__icon" icon="fa-solid fa-angles-right" />
                    </div>
                </div>
                <nav class="socials__nav">
                    <ul class="socials__list">
                        <li class="socials__list-item" v-for="(social, index) of socials" :key="index">
                            <a :class="['socials__link', social.modifier ?? '']" :href="social.url" target="_new" 
                                :title="`${index[0].toUpperCase()}${index.substring(1)}`"
                            >
                                <img class="socials__img" :src="social.img" :alt="index" loading="lazy">
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <img src="@/assets/images/dvoted-logo.webp" alt="dvoted logo">
        <nav class="nav">
            <router-link class="nav__item" v-for="(link, index) in links" :key="index" :to="link">{{ index }}</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Nav',

    data() {
        return {
            links: {
                'About': '/about',
                'freebies': '/freebies',
                'getInspired': '/get-inspired',
                'blog': '/blog',
                'contact': '/'
            },

            socials: {
                mail: {
                    'url': 'mailto:info@dvoted.nl',
                    'img': require('@/assets/images/dvoted-mail.webp'),
                },

                instagram: {
                    'url': 'https://www.instagram.com/ddvoted/',
                    'img': require('@/assets/images/dvoted-instagram.webp'),
                    'modifier': 'socials__link--instagram'
                },

                pinterest: {
                    'url': 'https://nl.pinterest.com/',
                    'img': require('@/assets/images/dvoted-pinterest.webp'),
                    'modifier': 'socials__link--pinterest'
                },

                spotify: {
                    'url': 'https://open.spotify.com/playlist/3x3Log1AV65f9ejgTEUBDF?si=aOaRl0bPRKCyz4f4KShf0Q&amp;nd=1',
                    'img': require('@/assets/images/dvoted-spotify.webp'),
                    'modifier': 'socials__link--spotify'
                },

                youtube: {
                    'url': 'https://www.youtube.com/channel/UC-q4017C2MlgcwNiI8UmBzg',
                    'img': require('@/assets/images/dvoted-youtube.webp'),
                    'modifier': 'socials__link--youtube'
                },
            }
        }
    }
}
</script>