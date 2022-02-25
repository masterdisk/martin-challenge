<template>
    <div>
        <h2 class="center">My Application</h2>
        <div v-text="message"></div>
        <ul>
            <li :key="country.id" v-for="country in countries">{{ country }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "A list of words",
            countries: [],

        };
    },
    mounted() {
        let el = document.querySelector("div[data-words]");
        let myCountries = el.dataset.words.split(",");

        this.countries.push.apply(this.countries, myCountries);
    }
};


</script>

<style>

</style>
