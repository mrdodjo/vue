<template>
    <GroceriesTable v-model="products"></GroceriesTable>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
import GroceriesTable from './components/GroceriesTable.vue';

const products = ref([
    {product: 'koekjes', price: 1.2, amount: 0},
    {product: 'noten', price: 2.99, amount: 0},
    {product: 'broccoli', price: 0.99, amount: 0},
    {product: 'rijst', price: 1.0, amount: 0},
]);
</script>
