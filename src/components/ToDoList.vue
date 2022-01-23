<template>
  <div>
    <h2></h2>
    <input v-model.trim="newTask.text" type="text" />
    <button @click="addTask">add</button>
    <ul>
      <to-do-list-item
        v-for="task of tasksList"
        :key="task.id"
        :task="task"
        @task-complete="completeTask"
        @task-delete="deleteTask"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ToDoListItem from "@/components/ToDoListItem.vue";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  components: {
    ToDoListItem,
  },
})
export default class ToDoList extends Vue {
  newTask: Task = {
    id: 0,
    text: "",
    completed: false,
  };
  tasksList: Array<Task> = [];

  addTask(): void {
    if (!this.newTask.text) {
      return;
    }
    this.newTask.id = Date.now();
    const newTask = { ...this.newTask };
    this.tasksList.push(newTask);
    this.newTask.text = "";
  }

  completeTask(task: Task): void {
    const completedTask = this.tasksList.find(
      (listTask) => listTask.id === task.id
    );
    if (!completedTask) {
      return;
    }
    completedTask.completed = true;
  }

  deleteTask(task: Task): void {
    const taskForDeleteIndex = this.tasksList.findIndex(
      (listTask) => listTask.id === task.id
    );
    if (taskForDeleteIndex <= -1) {
      return;
    }
    this.tasksList.splice(taskForDeleteIndex, 1);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
