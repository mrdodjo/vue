<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Prijs</th>
                    <th>Hoeveelheid</th>
                    <th>Subtotaal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in getAllGroceries">
                    <td>
                        {{ item.product }}
                    </td>
                    <td>
                        {{ item.price }}
                    </td>
                    <td>
                        {{ item.amount }}
                    </td>
                    <td>
                        {{ (item.price * item.amount).toFixed(2) }}
                    </td>
                    <td>
                        <routerLink :to="{name: 'groceries.edit', params: {id: item.id}}">edit</routerLink>
                    </td>
                </tr>
                <tr>
                    <td>totaal</td>
                    <td></td>
                    <td></td>
                    <td>
                        {{ total.toFixed(2) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
import {getAllGroceries} from '../store';

const totalcalc = ref([]);

const total = computed(() => {
    for (let i = 0; i < getAllGroceries.value.length; i++) {
        totalcalc.value.splice(i, 1, getAllGroceries.value[i].price * getAllGroceries.value[i].amount);
    }
    return totalcalc.value.reduce((p, a) => p + a, 0);
});
</script>
