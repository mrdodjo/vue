<template>
    <ChildComponent v-model="sharedMessage" />
    <p>Huidig bericht: {{ sharedMessage }}</p>
</template>

<script setup>
import {ref} from 'vue';
import ChildComponent from './ChildComponent.vue';

const sharedMessage = ref('');
</script>
