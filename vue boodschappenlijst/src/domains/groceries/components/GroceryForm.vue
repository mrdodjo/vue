<template>
    <form>
        <input v-model="name" placeholder="name" />
        <input v-model="price" type="number" min="0" placeholder="price" />
        <input v-model="amount" type="number" min="0" placeholder="amount" />
        <button @click="">add</button>
    </form>
</template>

<script setup>
const props = defineProps(['grocery']);
const emit = defineEmits(['submit']);
</script>
