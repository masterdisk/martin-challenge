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
                <td>{{ row.city_visited }}</td>
                <td>{{ row.city_visits }}</td>
                <td v-if="row.city_visits > 3" class="favorite-country" @click="greet">favorite</td>
                <td v-else class="not-favorite-country" @click="reload()">not favorite</td>
            </tr>
            </thead>
        </table>

    </div>





</template>

<script>

import Services from "../../services/Services";

export default {

    name: 'ViewData',
    data() {
        // initialize the countries data object
        return {
            fetchedData: {},
            fields: ["isActive", "first_name", "last_name", "age"]
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

        editModal: function (id) {
            console.log(id);
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
