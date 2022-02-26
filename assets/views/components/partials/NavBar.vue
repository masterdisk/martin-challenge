<template>
    <div class="navbar">
        <a href="#/">Home</a> |
        <a href="#/data">Data</a> |
        <a href="#/edit">Edit Data</a>
    </div>
    <component :is="currentView"/>
</template>

<script>

import FetchedData from "../ViewData";
import EditData from "../EditData";
import Home from "../Home";

const routes = {
    '/': Home,
    '/data': FetchedData,
    '/edit': EditData
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

<style>

.navbar {
    text-align: center;
}

</style>
