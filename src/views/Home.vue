<template>
    <div class="container mx-auto mt-4">
      <h1 class="text-3xl text-center p-2 font-bold">
        Vue 3 Todo App with Typescript and Vuex 4
      </h1>
  
      <div></div>
      <h3 class="text-center mt-4">Loading...</h3>
  
      <div>
        <p class="text-center mt-2"></p>
        <NewItem />
        <TodoList />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  import NewItem from "@/components/NewItem.vue";
  import TodoList from "@/components/TodoList.vue";
  
  export default defineComponent({
    name:"todo-home",
    components: { TodoList, NewItem },
    setup() {
      return {};
    },
  });
  </script>
  
  <style scoped></style>
  