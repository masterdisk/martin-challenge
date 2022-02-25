<script>
import FetchedData from './partials/FetchedData'
import Home from './partials/Home'


const routes = {
    '/': Home,
    '/data': FetchedData
}

export default {
    data() {
        return {
            currentPath: window.location.hash
        }
    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || '/'] || NotFound
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })
    }
}
</script>

<template>
    <div class="navbar">
        <a href="#/">Home</a> |
        <a href="#/data">Data</a> |
        <a href="#/non-existent-path">Broken Link</a>
    </div>
    <component :is="currentView"/>
</template>


<style>

.navbar{
    text-align: center;
}

</style>
