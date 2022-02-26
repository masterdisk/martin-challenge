<template>
    {{fetchedData}}
</template>

<script>

import {ref} from "vue";
import axios from 'axios';

const {onMounted} = require("vue");

export default {

    setup() {
        const fetchedData = ref([])
        onMounted(async () => {
            await axios
                .get('https://6217a42671e7672e53868583.mockapi.io/api/users/tableForUsers')
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
