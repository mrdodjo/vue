<template>
    <h2>Create</h2>
    <GroceryForm :grocery="grocery" @submit="data => addGrocery(data)" />
    <button @click="log">log</button>
</template>

<script setup>
import {ref} from 'vue';
import GroceryForm from '../components/GroceryForm.vue';
import {addGrocery} from '../store.js';

const grocery = {product: '', price: 0, amount: 0};
</script>
