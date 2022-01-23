<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ToDoList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ToDoList from "@/components/ToDoList.vue"; // @ is an alias to /src

@Component({
  components: {
    ToDoList,
  },
})
export default class Home extends Vue {}
</script>
