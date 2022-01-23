<template>
  <li :class="taskClasses">
    {{ task.text }}
    <button @click="completeTask">Done</button>
    <button @click="deleteTask">Delete</button>
  </li>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

@Component
export default class ToDoListItem extends Vue {
  @Prop() readonly task: Task | undefined;

  @Emit("task-complete")
  completeTask(): Task | undefined {
    return this.task;
  }

  @Emit("task-delete")
  deleteTask(): Task | undefined {
    return this.task;
  }

  get isTaskCompleted(): boolean | undefined {
    return this.task?.completed;
  }
  get taskClasses(): Array<string> {
    return [this.isTaskCompleted ? "completed" : ""];
  }
}
</script>

<style lang="scss">
.completed {
  text-decoration: line-through;
}
</style>
