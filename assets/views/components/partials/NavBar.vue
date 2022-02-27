<template>
    <div class="container navbar ">
        <a class='navbar-item' href="#/">Home</a>
        <a class='navbar-item' href="#/data">Data</a>
        <a class='navbar-item' href="#/edit">Edit Data</a>


        <div class="field has-addons p-2">
            <div class="control">
                <input v-model="nameCountry" class="input is-inline" type="text" placeholder="Name">
                <input v-model="visited" class="input is-inline" type="text" placeholder="Visited yes/no">
                <input v-model="noVisits" class="input is-inline" type="text" placeholder="No. of visits">
                <input v-model="favorite" class="input is-inline" type="text" placeholder="favorite">
            </div>
            <div class="control">
                <a class="button is-info" @click="sendData()">
                    Add City
                </a>
            </div>
        </div>

    </div>
    <component :is="currentView"/>
</template>

<script>

import FetchedData from "../ViewData";
import EditData from "../EditData";
import Home from "../Home";
import Services from "../../../services/Services";

const routes = {
    '/': Home,
    '/data': FetchedData,
    '/edit': EditData
}

export default {
    data() {
        return {
            currentPath: window.location.hash,
            nameCountry: '',
            visited: '',
            noVisits: '',
            favorite: '',
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
    },
    methods: {
        async sendData() {

            let checkCountry = await Services.checkIfExists(this.nameCountry)

            if (checkCountry.length === 1) alert("the country exists!");
            else { alert("the country doesn't exist");

                let newCountry = {

                    "city_name": this.nameCountry,
                    'city_visited':this.visited,
                    'city_visits':this.noVisits,
                }

                await Services.addCity(newCountry);
                window.location.reload();
            }

            // console.log(typeof checkCountry);
            // console.log( checkCountry);
            // console.log(this.nameCountry);
            // console.log(this.visited);
            // console.log(this.noVisits);
            // console.log(this.favorite);

        }
    }
}
</script>

<style>

.navbar {
    text-align: center;
}

</style>
