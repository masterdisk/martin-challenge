<template>
    <div class="container">
        <table class="table is-fullwidth">
            <thead>

            <td class="has-text-weight-bold">No.</td>
            <td class="has-text-weight-bold">City Name</td>
            <td class="has-text-weight-bold">City Visited</td>
            <td class="has-text-weight-bold">Favorite</td>

            <tr v-for="row in fetchedData" :key="fetchedData.id">
                <td>{{ row.id }}</td>
                <td>{{ row.city_name }}</td>
                <td v-if="row.city_visited === true" class="favorite-country" @click="markFavourite(row.id,row.city_visited)">visited  </td>
                <td v-else class="not-favorite-country" @click="markFavourite(row.id,row.city_visited)">not visited</td>
                <td v-if="row.city_visits >= 3" class="favorite-country has-text-weight-bold">favourite </td>
                <td v-else class="not-favorite-country has-text-weight-bold" >not favourite</td>
            </tr>

            </thead>
        </table>

    </div>

</template>

<script>
import Services from "../../../services/Services";

export default {
    name: "Table",
    data() {
        // initialize the cities data object
        return {
            fetchedData: {}
        }
    },
    created() {
        this.getData();
    },
    methods: {
        async getData() {
            this.fetchedData = await Services.getCountries();
        },
        reload() {
            window.location.reload();
        },
        async markFavourite(id, visited) {
            await Services.markCity(id, visited);
            this.reload();
        }

    }
}
</script>

<style>
.container {
    background-color: lightblue
}

.favorite-country {
    color: green !important;
}

.not-favorite-country {
    color: red !important;
}

</style>
