<template>
  <div class="header">
  <h1>{{ tittle }}</h1>
  <Button text="add task" color="#b1047b"/>
  <Button text="update task" color="#b1047b"/>
  <Button text="delet task" color="#b1047b"/>

  </div>

</template>

<script>
import Button from './button.vue'
export default {
  name:'header',
  components: {
    Button,
  },
  props:{
    tittle:{
      type: String,
    } ,
  }
}
</script>

<style>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 70px;
}

</style>