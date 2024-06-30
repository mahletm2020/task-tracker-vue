<template>
  <div class="container">
      <Header tittle="task tracker"/>
    <div class="form">
     <Form/>
     </div>
     <div class="content">
      <Tasks @toggle-reminder="toggleReminder"
      @delet-task="delettask" :tasks="tasks"/>
     </div>
    
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import Form from './components/form.vue'
export default {
name: 'App',
components: {
  Header,
  Tasks,
  Form,
},
data(){
  return{
    tasks: []
  }
},
methods:{
  delettask(id){
    if(confirm('Are you sure?')){
      this.tasks = this.tasks.filter((task) => task.id !== id)
    }
  },
  toggleReminder(id){
    this.tasks = this.tasks.map((task) => 
    task.id === id ? {...task, reminder: !task.reminder} : task
    )
  }
},
created(){
  this.tasks =[
    {
      id:1,
      text: 'task 1',
      day: 'monday',
      reminder: true
    },
    {
      id:2,
      text: 'task 2',
      day: 'tuesday',
      reminder: false
    },
    {
      id:3,
      text: 'task 3',
      day: 'wednesday',
      reminder: false
    }
    
  ]
}
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
}

/* #content {
  margin-top: 20px;
  justify-content: top;
} */
</style>