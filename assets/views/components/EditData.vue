<template>
    <div class="container">
        <table class="table is-fullwidth">
            <thead>

            <td class="has-text-weight-bold">No.</td>
            <td class="has-text-weight-bold">City Name</td>
            <td class="has-text-weight-bold">City Visited</td>
            <td class="has-text-weight-bold">City Visits</td>
            <td class="has-text-weight-bold">Favorite</td>

            <tr v-for="row in fetchedData" :key="fetchedData.id">
                <td>{{ row.id }}</td>

                <td>{{ row.city_name }}</td>

                <td v-if="row.city_visits === true" class="favorite-country">visited</td>
                <td v-else="row.city_visits " class="not-favorite-country">not visited</td>

                <td>{{ row.city_visits }}</td>
                <td v-if="row.city_visits > 3" class="favorite-country" @click="greet">favorite</td>
                <td v-else class="not-favorite-country" @click="reload()">not favorite</td>
            </tr>
            </thead>
        </table>
    </div>
</template>

<script>

import {ref} from "vue";
import axios from 'axios';

const {onMounted} = require("vue");

export default {

    setup() {

        const fetchedData = ref([]) //fetched data from the API

        onMounted(async () => {
            await axios
                .get('https://6217a42671e7672e53868583.mockapi.io/tableForUsers/')
                .then(response => {
                    fetchedData.value = response.data
                })
            console.log(fetchedData)
        })
        return {
            fetchedData
        }
    }
}
</script>

<style>

</style>
