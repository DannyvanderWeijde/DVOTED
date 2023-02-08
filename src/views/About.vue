<template>
    <div>
        <header class="header">
            <navComponent></navComponent>
        </header>

        <div class="about">
            
        </div>
    </div>
</template>

<script>
    import navComponent from '../components/Nav';

    export default {
        name: 'about',

        components: {
            navComponent,
        }
    }
</script>