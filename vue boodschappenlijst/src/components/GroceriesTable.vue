<template>
    <h2>List</h2>
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
                        <ul>
                            {{
                                item.product
                            }}
                        </ul>
                    </td>
                    <td>
                        <ul>
                            {{
                                item.price
                            }}
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <input v-model.number="item.amount" type="number" class="input" min="0" />
                        </ul>
                    </td>
                    <td>
                        <ul>
                            {{
                                (item.price * item.amount).toFixed(2)
                            }}
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <routerLink :to="{name: 'groceries.edit', params: {index}}">edit</routerLink>
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
    </div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';
import {getAllGroceries} from '../domains/groceries/store';

const totalcalc = ref([]);

const total = computed(() => {
    for (let i = 0; i < getAllGroceries.value.length; i++) {
        totalcalc.value.splice(i, 1, getAllGroceries.value[i].price * getAllGroceries.value[i].amount);
    }
    return totalcalc.value.reduce((p, a) => p + a, 0);
});
</script>
