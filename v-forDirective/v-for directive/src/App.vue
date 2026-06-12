<script setup>
import { ref, reactive } from "vue";

const tasks = ref([
  { name: "Boodschappen doen", completed: false },
  { name: "Afwassen", completed: true },
  { name: "Hond uitlaten", completed: false },
]);

const completion = (task) => {
  task.completed = !task.completed;
};
</script>

<template>
  <div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <button @click="completion(task)">Toggle</button>
        {{ task.name }}
        {{ task.completed ? "(voltooid)" : "(niet voltooid)" }}
      </li>
    </ul>
  </div>
</template>
