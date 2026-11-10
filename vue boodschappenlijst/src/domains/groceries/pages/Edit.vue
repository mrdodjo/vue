<template>
    <h2>Edit</h2>
    <p>{{ getGroceryById.product }} {{ getGroceryById.price }}</p>
    <GroceryForm :grocery="getGroceryById" />
    <button @click="log">log</button>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
import {useRoute} from 'vue-router';
import {getAllGroceries} from '../store';
import GroceryForm from '../components/GroceryForm.vue';

const route = useRoute();
const getGroceryById = computed(() => {
    return getAllGroceries.value[route.params.index];
});
const log = () => {
    console.log(getGroceryById.value);
    console.log(getAllGroceries.value);
};
</script>
