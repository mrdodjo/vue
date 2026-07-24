<template>
  <div>
    <h3>{{ title }}</h3>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>