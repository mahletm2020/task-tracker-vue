<template>
  <div v-for="task in tasks" :key="task.id" >
  <Task @delet-task="$emit('delet-task', task.id)" :task="task"/>  
  </div>
</template>

<script>
import Task from './task.vue'
export default {
  name: 'Tasks',
  props:{
    tasks: Array
  },
  components:{
    Task,
  }
}

</script>

<style>

</style>