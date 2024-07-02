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

<script>
import Header from './components/Header.vue';
import Tasks from './components/Tasks.vue';
//import Form from './components/form.vue';
import { useQuery } from '@vue/apollo-composable'; // Import useQuery
import { GET_TASKS } from './queries'; // Import your GraphQL query
import { apolloClient } from './apollo'; // Import Apollo Client instance

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    //Form,
  },
  setup() {
    
    const { result, loading, error } = useQuery(GET_TASKS, {}, { client: apolloClient });

    const tasks = result.value ? result.value.tasks : [];

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

    return {
      tasks,
      loading,
      error,
      deleteTask,
      toggleReminder,
    };
  },
};
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
}
</style>
