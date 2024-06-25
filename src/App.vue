<template>
  <div class="container">
     <Header tittle="task tracker"/>
     <Form/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Form from './components/form.vue'
export default {
name: 'App',
components: {
  Header,
  Form,
}
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border-color: black;
}
</style>