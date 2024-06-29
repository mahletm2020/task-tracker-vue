<template>
  <div class="min">
    <div :class="[task.reminder ? 'reminder' : '', 'task']">
     <h3>{{task.text}}</h3>
     <p>{{ task.day }}</p>
  </div>
 
  <div class="icon">
   <i @click="onDelet(task.id)" class="fas fa-times"></i>
  </div>
  </div>
  
</template>

<script>
export default {
name: 'Task',
props:{
  task: Object,
},
methods:{
  onDelet(id){
    this.$emit('delet-task', id)
  }
}
}
</script>

<style scoped>
.min{
  background: hsl(0, 0%, 96% ,0.3);
  width: 25rem;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  flex-direction: row;
  gap: 15rem;
  cursor: pointer;
  justify-content: space-between; 

}
.task h3, p{
  display: flex;
  align-items: center;
  justify-content: space-between;
 margin-left: 20px;
}
.fas{
  color: hsl(319, 97%, 41%);
  display: flex;
  justify-content: right;
  margin-right: 30px;
  margin-top: 35px;
  font-size: 25px;
}
.reminder {
  border-left: 8px solid hsl(319, 96%, 35%);
}

</style>