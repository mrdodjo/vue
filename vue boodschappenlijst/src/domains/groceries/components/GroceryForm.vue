<template>
    <form v-on:submit.prevent>
        <input required v-model="tempGrocery.product" placeholder="product" />
        <input required v-model="tempGrocery.price" type="number" step="any" min="0" placeholder="price" />
        <input required v-model="tempGrocery.amount" type="number" min="0" placeholder="amount" />
        <button
            @click="
                $emit('submit', tempGrocery);
                idSetter;
                $router.push({name: 'groceries.overview'});
            "
        >
            done
        </button>
    </form>
</template>

<script setup>
import {ref} from 'vue';
import {idSetter} from '../store';
const props = defineProps({
    grocery: Object,
});

//  kopietje van het props.grocery object maken
const tempGrocery = ref(Object.assign({}, props.grocery));

const emit = defineEmits(['submit']);

//handlers for button in Gform edit and create
</script>
