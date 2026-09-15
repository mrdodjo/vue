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
            <tr>totaal</tr>
        </table>
        <p>{{ products }}</p>
    </div>
    <div><button @click="log">log</button></div>
</template>

<script setup>
import {ref, reactive, computed} from 'vue';

const products = ref([
    {product: 'koekjes', price: 1.2, amount: 0},
    {product: 'noten', price: 2.99, amount: 0},
    {product: 'broccoli', price: 0.99, amount: 0},
    {product: 'rijst', price: 1.0, amount: 0},
]);

const total = computed(() => {
    for (i = 0; i < products.value.length; i++) {
        products.value[i].price * products.value[i].amount;
    } //.reduce((p, a) => p + a, 0);
});

const log = () => {
    console.log(products.value[0].price);
    console.log(products.value[0].subtotal);
    console.log(Subtotal);
    console.log(products.value.length);
};
</script>
