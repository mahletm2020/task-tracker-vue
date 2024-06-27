<template>
<button @click="onClick()" id="close" :style="{background: color}" >{{text}}</button>
</template>

<script>
export default {
name: 'Button',
props: {
  text: String,
  color: String
},
methods:{
  onClick(){
  console.log('click');  
}
}
}
</script>

<style>
#close {
  background-color: #b1047b;/*its not the color its taking its taking the one who s bind to i */
  border-radius: 5px;
  color: rgb(249, 244, 200);
  border: none;
  height: 25px;
  width: 100px;
  margin-top: 15px;
}
</style>