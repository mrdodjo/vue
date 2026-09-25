<template>
    <h1>boodschappenlijst</h1>
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
                        <ul v-for="product in products">
                            {{
                                product.product
                            }}
                        </ul>
                    </td>
                    <td>
                        <ul v-for="price in products">
                            {{
                                price.price
                            }}
                        </ul>
                    </td>
                    <td>
                        <ul v-for="p in products">
                            <input v-model.number="p.amount" type="number" class="input" min="0" />
                        </ul>
                    </td>
                    <td>
                        <ul v-for="product in products">
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

const products = defineModel();
const totalcalc = ref([]);

const total = computed(() => {
    for (let i = 0; i < products.value.length; i++) {
        totalcalc.value.splice(i, 1, products.value[i].price * products.value[i].amount);
    }
    return totalcalc.value.reduce((p, a) => p + a, 0);
});

const log = () => {
    console.log(totalcalc.value);
    //console.log(totalcalc);
    //console.log(products.value.length);
    console.log(total.value);
};
</script>
