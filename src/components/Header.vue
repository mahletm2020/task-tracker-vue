<template>
  <div class="header">
  <h1>task tracker</h1>
  <button id="close">close</button>
    
  </div>

</template>

<script>
export default {

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
#close {
  background-color: #b1047b;
  border-radius: 5px;
  color: rgb(249, 244, 200);
  border: none;
  height: 25px;
  width: 100px;
  margin-top: 15px;
}
</style>