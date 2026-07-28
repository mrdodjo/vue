<template>
    <div>
        <h1>Roll dice</h1>
        <div class="row">
            <div class="column">
                <h3>Current rolls</h3>
                <tableCurrent :dice />
            </div>
            <div class="column">
                <h3>Total rolls</h3>
                <TableTotal :dice />
            </div>
        </div>
        <button @click="rolldice">Gooi!</button>
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue';
import tableCurrent from './tableCurrent.vue';
import TableTotal from './tableTotal.vue';
</script>
