<template>
  <ChildComponent :title="title" />
</template>

<script setup>
import ChildComponent from './ChildComponent.vue';

const title = "Welkom in Vue 3!"
</script>