<template>
    <form v-on:submit.prevent>
        <input required v-model="tempGrocery.product" />
        <input required v-model="tempGrocery.price" type="number" min="0" />
        <input required v-model="tempGrocery.amount" type="number" min="0" />
        <button @click="$emit('submit', tempGrocery)">add</button>
    </form>
    <button @click="log">logchild</button>
</template>

<script setup>
import {ref} from 'vue';
const props = defineProps({
    grocery: Object,
});

//  kopietje van het props.grocery object maken
const tempGrocery = ref(Object.assign({}, props.grocery));

const emit = defineEmits(['submit']);

const log = () => {
    console.log(tempGrocery.value);
};
</script>
