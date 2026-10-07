import {ref, reactive, computed} from 'vue';

//state
const groceries = ref([
    {product: 'koekjes', price: 1.2, amount: 0},
    {product: 'noten', price: 2.99, amount: 0},
    {product: 'broccoli', price: 0.99, amount: 0},
    {product: 'rijst', price: 1.0, amount: 0},
]);

//getters
export const getAllGroceries = computed(() => groceries.value);

//actions
