<template>
    <section class="landing-page">
        <div class="landing-page__container landing-page__container--left">
            <h1 class="landing-page__title">
                Craving to create and inspire.
            </h1>
            <p class="landing-page__text">
                Welcome to DVOTED. A place to let creativity flow.
                Not just a portfolio to showcase projects, but to inspire.
                All about faith, (graphic) design, interior- & exterior design, music, fashion & lifestyle.
            </p>
            <div class="landing-page__button-container">
                <router-link class="landing-page__button" :to="'/get-inspired'">
                    <button class="landing-page__button button button--primary">
                        Get inspired
                    </button>
                </router-link>       
                
                <router-link class="landing-page__button" :to="'/blog'">
                    <button class="landing-page__button button button--secondary">
                        Latest blogs
                    </button>
                </router-link>  
            </div>
        </div>
        <div class="landing-page__container landing-page__container--right">
            <div class="landing-page__image-container landing-page__image-container--left">
                <img class="landing-page__image" 
                    src="../assets/images/dvoted-homepage-leafs.webp" alt="dvoted homepage leafs"
                >
            </div>

            <div class="landing-page__image-container landing-page__image-container--right">
                <img class="landing-page__image" 
                    src="../assets/images/dvoted-homepage-room.webp" alt="dvoted homepage room"
                >
            </div>
        </div>
    </section>
</template>

<script>
    export default {

    }
</script>