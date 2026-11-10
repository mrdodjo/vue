import {ref, reactive, computed} from 'vue';

//state
const groceries = ref([
    {product: 'koekjes', price: 1.2, amount: 0, id: 0},
    {product: 'noten', price: 2.99, amount: 0, id: 1},
    {product: 'broccoli', price: 0.99, amount: 0},
    {product: 'rijst', price: 1.0, amount: 0},
]);

//getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = id => computed(() => groceries.value.find(grocery => grocery.id == id));

//actions
export const addGrocery = grocery => groceries.value.push(grocery);
