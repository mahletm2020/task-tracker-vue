<template>
  <div class="task">
  <h3>{{task.text}}</h3>
 <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
name: 'Task',
props:{
  task: Object,
},
}
</script>

<style scoped>
.task{
  background: hsl(0, 0%, 96% ,0.3);
  width: 25rem;
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
}
.task h3, p{
  display: flex;
  align-items: center;
  justify-content: space-between;
 margin-left: 20px;
}

</style>