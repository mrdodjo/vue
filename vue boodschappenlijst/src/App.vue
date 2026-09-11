<template>
    <h1>boodschappenlijst</h1>
    <div>
        <table>
            <tr>
                <td>
                    <li v-for="product in products">{{ product }}</li>
                </td>
            </tr>
        </table>
    </div>
    <div></div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';

const products = ref(['koekjes', 'noten', 'broccoli', 'rijst']);
</script>
