<template>
    <div id="app">
        <Nav/>
        <router-view/>
    </div>
</template>
<script>

import Nav from './components/partials/NavBar';

export default {
    name: 'app',
    components: {
        Nav
    }
}
</script>
<style lang="scss">

</style>
