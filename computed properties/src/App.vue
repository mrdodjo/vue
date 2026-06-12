<template>
    <div>
        <input v-model="newName" placeholder="Type your name" />
        <input v-model.number="newAge" placeholder="Type your age" type="number" />
    </div>
    <div>
        <button @click="addPerson()">Toevoegen</button>
    </div>
    <div>
        <p v-for="(person, i) in people" :key="i">{{ person }}</p>
        <!-- <p v-for="(child, j) in children" :key="j">{{ child }}</p>-->
    </div>
</template>

<script setup>
import {ref, computed} from 'vue';

const people = ref([
    {name: 'Jan', age: 12},
    {name: 'Piet', age: 20},
]);

const newName = ref('');
const newAge = ref('');

const addPerson = () => {
    if ((newName.value, newAge.value)) {
        people.value.push({name: newName.value, age: newAge.value});
        newAge.value = null;
        newName.value = null;
    }
};

const children = computed(() => {
    people.filter(isChild);
});

const isChild = () => {
    people.age < 18;
};
</script>
