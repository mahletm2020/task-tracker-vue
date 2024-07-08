<template>
  <div class="container">
    <Header title="Task Tracker" />
    <div class="form">
      <Form />
    </div>
    <div class="content">
      <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';
import Form from './components/form.vue';
import { useQuery } from '@vue/apollo-composable'; // Import useQuery
import { GET_TASKS } from './queries'; // Import your GraphQL query

const { result, loading, error } = useQuery(GET_TASKS);

const tasks = result?.value?.tasks ?? [];

function deleteTask(id) {
  if (confirm('Are you sure?')) {
    tasks.value = tasks.filter((task) => task.id !== id);
  }
}

function toggleReminder(id) {
  tasks.value = tasks.map((task) =>
    task.id === id ? { ...task, reminder: !task.reminder } : task
  );
}
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 26rem;
  gap: 20px;
  align-items: center;
  border-radius: 20px;
  background-color: rgb(61, 62, 62);
}
</style>
