<template>
    <h2>Edit</h2>
    <p></p>
    <GroceryForm :grocery="grocery.value" @submit="data => updateGrocery(route.params.id, data)" />
</template>

<script setup>
import {ref, reactive, computed} from 'vue';

import {getGroceryById, updateGrocery} from '../store';
import {useRoute} from 'vue-router';
import GroceryForm from '../components/GroceryForm.vue';

const route = useRoute();
const grocery = computed(() => getGroceryById(route.params.id));
</script>
