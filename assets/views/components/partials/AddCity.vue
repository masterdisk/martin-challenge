<template>

    <div class="field has-addons p-2 ">
        <div class="control">

            <input v-model="nameCountry" class="input is-inline" type="text" placeholder="Name">

            <!--  visited/not visited dropdown -->
            <div class="control is-inline">
                <div class="select">
                    <select v-model="visited">
                        <option>visited</option>
                        <option>not visited</option>
                    </select>
                </div>
            </div>

            <!--  favorite/not favorite dropdown -->

            <input v-model="noVisits" class="input is-inline" type="text" placeholder="No. of visits">

            <!--  Submit button-->

        </div>
        <div class="control">
            <a class="button is-info" @click="sendData()">
                Add City
            </a>
        </div>
    </div>

</template>

<script>

import Services from "../../../services/Services";

export default {
    name: "AddCity",
    data() {
        return {
            nameCountry: '',
            visited: '',
            noVisits: ''
        }
    },
    methods: {
        async sendData() {

            let checkCountry = await Services.checkIfExists(this.nameCountry);

            if (checkCountry.length > 1) alert("the country exists!");
            else {


                switch (this.visited) {
                    case "visited":
                        this.visited = true;
                        break;
                    default:
                        this.visited = false;
                        break;
                }

                if ((this.noVisits > 1) && (this.visited === false)) {
                    alert("The country was visited!");
                    this.visited = true;
                }

                let newCountry = {

                    "city_name": this.nameCountry,
                    'city_visited': this.visited,
                    'city_visits': this.noVisits,
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

<style scoped>

</style>
