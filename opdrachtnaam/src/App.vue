<script setup>
import {ref, reactive} from 'vue';

const firstName = ref('');
const clicks = ref(0);
const incrementClicks = () => {
    clicks.value++;
};
const person = reactive({firstName: '', country: ''});
const changeCountry = newCountry => {
    person.country = newCountry;
};
</script>

<template>
    <div>
        <button @click="incrementClicks">Klik mij!</button>
        <p>clicks: {{ clicks }}</p>
    </div>
    <div>
        <h2>Hallo {{ firstName }}</h2>
        <input v-model="firstName" placeholder="Typ je naam in" />
    </div>
    <div>
        <button @click="changeCountry('Nederland')">Nederland</button>
        <button @click="changeCountry('België')">België</button>
        <p>country: {{ person.country }}</p>
    </div>
</template>
