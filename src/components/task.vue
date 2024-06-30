<template>
  <div class="min" :class="{ reminder: task.reminder }">
    <div id="task101" @dblclick="$emit('toggle-reminder', task.id)">
      <h3>{{ task.text }}</h3>
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
  props: {
    task: Object,
  },
  methods: {
    onDelet(id) {
      this.$emit('delet-task', id);
    }
  }
}
</script>

<style scoped>
.min {
  background: hsl(0, 0%, 96%, 0.3);
  width: 27rem;
  height: 4rem;
  border-radius: 10px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-left: 8px solid transparent;
}

#task101 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}
#task101 h3, #task101 p {
  margin: 0;
  margin-left: 12px;
}
.fas {
  color: hsl(319, 97%, 41%);
  font-size: 25px;
  cursor: pointer;
  margin-right: 15px;
}

.reminder {
  border-left-color: hsl(319, 96%, 35%);
}
</style>
