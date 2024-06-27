<template>
  <div class="container">
     <div class="content">
      <Header tittle="task tracker"/>
      <Tasks :tasks="tasks"/>
     </div>
     
     <!-- <Form/> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
// import Form from './components/form.vue'
import Tasks from './components/Tasks.vue'
export default {
name: 'App',
components: {
  Header,
  Tasks,
  // Form,
},
data(){
  return{
    tasks: []
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
      reminder: true
    }
    
  ]
}
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 26rem;
  align-items: center;
  border-radius: 20px;
  border: 1px solid rgb(239, 234, 234);
}

/* #content {
  margin-top: 20px;
  justify-content: top;
} */
</style>