<template>
    <div>
        <input v-model="newName" placeholder="Type your name" />
        <input v-model.number="newAge" placeholder="Type your age" type="number" />
    </div>
    <div>
        <button @click="addPerson()">Toevoegen</button>
    </div>
    <div>
        <h3>People: {{ totalPeople }}</h3>
        <p v-for="(person, i) in people" :key="i">Name: {{ person.name }}, Age: {{ person.age }}</p>
        <h3>Children: {{ numberOfChildren }}</h3>
        <p v-for="(person, i) in children" :key="i">Name: {{ person.name }}, Age: {{ person.age }}</p>
        <h3>Adults: {{ numberOfAdults }}</h3>
        <p v-for="(person, i) in adults" :key="i">Name: {{ person.name }}, Age: {{ person.age }}</p>
    </div>
</template>

<script setup>
import {ref, computed} from 'vue';

const people = ref([
    {name: 'Jan', age: 12},
    {name: 'Piet', age: 20},
]);

const newName = ref(null);
const newAge = ref(null);

const addPerson = () => {
    if ((newName.value, newAge.value)) {
        people.value.push({name: newName.value, age: newAge.value});
        newAge.value = null;
        newName.value = null;
    }
};

const children = computed(() => {
    return people.value.filter(childCheck);
});

const adults = computed(() => {
    return people.value.filter(adultCheck);
});

const totalPeople = computed(() => {
    return people.value.length;
});

const numberOfChildren = computed(() => {
    return children.value.length;
});
const numberOfAdults = computed(() => {
    return adults.value.length;
});
function childCheck(person) {
    return person.age < 18;
}

function adultCheck(person) {
    return person.age >= 18;
}
</script>
