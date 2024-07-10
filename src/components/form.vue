<template>
  <div class="form">
    <label for="task">Task</label>
    <input type="text" id="task"  v-model="tasks" name="tasks">
    
    <label for="datetime">Date and Time</label>
    <input type="text" id="datetime" v-model="datetime" name="datetime">
    
    <label for="reminder">
      <input type="checkbox" id="reminder" v-model="reminder" name="reminder"> Set Reminder 
    </label>
      <br>
    <button class="save-button">Save Task</button>  
  </div>
</template>

<script>
export default {
  name: 'FormComponent',
  data(){
    return{
      tasks: ' ',
      datetime: ' ',
      reminder: ' ',

    }
  }
}
</script>

<style >
body {
  background-color: black;
  color: white;
  font-family: Arial, sans-serif;
  padding: 0;
  margin: 0;
}

.form {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 20px;
  background-color: #2c2c2c;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"] {
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #444;
  color: white;
}

input[type="checkbox"] {
  margin-right: 10px;
  transform: scale(1.5);
}

.save-button {
  width: 100%;
  height: 30px;
  background-color: #b1047b;
  border: none;
  border-radius: 5px;
  color: rgb(245, 240, 196);
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.save-button:hover {
  background-color: #776274;
}
</style>
