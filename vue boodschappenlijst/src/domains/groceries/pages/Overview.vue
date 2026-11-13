<template>
    <h2>Overview</h2>
    <button @click="log">log</button>
    <GroceriesTable></GroceriesTable>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
import GroceriesTable from '../components/GroceriesTable.vue';
import {getAllGroceries} from '../store.js';

const totalcalc = ref([]);

const total = computed(() => {
    for (let i = 0; i < getAllGroceries.value.length; i++) {
        totalcalc.value.splice(i, 1, getAllGroceries.value[i].price * getAllGroceries.value[i].amount);
    }
    return totalcalc.value.reduce((p, a) => p + a, 0);
});
const log = () => {
    console.log(getAllGroceries.value);
};
</script>
