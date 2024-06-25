<template>
<button :style="{background: color}" class="close">{{text}}</button>
</template>

<script>
export default {
name: 'Button',
props: {
  text: String,
  color: String
}
}
</script>

<style>
/* #close {
  background-color: #b1047b;
  border-radius: 5px;
  color: rgb(249, 244, 200);
  border: none;
  height: 25px;
  width: 100px;
  margin-top: 15px;
} */
</style>