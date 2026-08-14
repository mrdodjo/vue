<template>
    <h1>Yahtzee</h1>
    <ScoreTable v-model="diceArray" />
    <ThrownDice v-model="diceArray" />
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
import ThrownDice from './components/ThrownDice.vue';
import ScoreTable from './components/ScoreTable.vue';

const diceArray = ref([]);
</script>
