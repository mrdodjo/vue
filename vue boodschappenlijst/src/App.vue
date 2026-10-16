<template>
    <h1>boodschappenlijst</h1>
    <nav>
        <RouterLink to="/overview">Go to Overview</RouterLink>
        <RouterLink to="/create">Go to create</RouterLink>
    </nav>
    <main>
        <RouterView />
        <GroceriesTable></GroceriesTable>
    </main>
</template>

<script setup>
import GroceriesTable from './components/GroceriesTable.vue';
</script>
