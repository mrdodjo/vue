<template>
    <h2>Overview</h2>
    <div>
        <table>
            <thead>
                <th>Product</th>
                <th>Prijs</th>
                <th>Hoeveelheid</th>
                <th>Subtotaal</th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ul v-for="product in getAllGroceries">
                            {{
                                product.product
                            }}
                        </ul>
                    </td>
                    <td>
                        <ul v-for="price in getAllGroceries">
                            {{
                                price.price
                            }}
                        </ul>
                    </td>
                    <td>
                        <ul v-for="p in getAllGroceries">
                            <input v-model.number="p.amount" type="number" class="input" min="0" />
                        </ul>
                    </td>
                    <td>
                        <ul v-for="product in getAllGroceries">
                            {{
                                (product.price * product.amount).toFixed(2)
                            }}
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td>totaal</td>
                    <td></td>
                    <td></td>
                    <td>
                        <ul>
                            {{
                                total.toFixed(2)
                            }}
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- <p>{{ products }}</p> -->
    </div>
    <div><button @click="log">log</button></div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
import {getAllGroceries} from '../store.js';

const totalcalc = ref([]);

const total = computed(() => {
    for (let i = 0; i < getAllGroceries.value.length; i++) {
        totalcalc.value.splice(i, 1, getAllGroceries.value[i].price * getAllGroceries.value[i].amount);
    }
    return totalcalc.value.reduce((p, a) => p + a, 0);
});
</script>
