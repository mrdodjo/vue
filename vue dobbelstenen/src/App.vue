<template>
    <div>
        <h1>Roll dice</h1>
        <div>
            <diceTable :count="count" />
        </div>
        <button @click="rolldice">Gooi!</button>
    </div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
import diceTable from './diceTable.vue';

const diceArray = ref([]);
const count = ref([]);

const rolldice = () => {
    diceArray.value = [];
    count.value = [0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 8; i++) {
        diceArray.value.push(Math.floor(Math.random() * 6 + 1));
    }
    diceArray.value.forEach(diceroll => {
        count.value[diceroll] = (count.value[diceroll] || 0) + 1;
    });
};
</script>
