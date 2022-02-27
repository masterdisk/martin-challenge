<template>
    <div class="container navbar ">
        <a class='navbar-item' href="#/">Home</a>
        <a class='navbar-item' href="#/data">Data</a>
<!--        <a class='navbar-item' href="#/edit">Edit Data</a>  Composition API attempt-->


<AddCity />

    </div>

    <component :is="currentView"/>
</template>

<script>

import FetchedData from "../ViewData";
import EditData from "../EditData";
import Home from "../Home";
import AddCity from "./AddCity";

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
    components: {
        AddCity,
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
