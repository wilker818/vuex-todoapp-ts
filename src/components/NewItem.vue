<template>
  <form class="my-4" @submit.prevent="createTask">
    <div class="mx-auto d-flex aling-items-center bg-white p-2 rounded shadow">
      <div class="flex-grow m-1 ml-3 w-100 d-flex aling-items">
        <input
          v-model="text"
          class="todo-input w-100"
          type="text"
          placeholder="What task do you need to complete?"
        />
      </div>
      <div class="flex-shrink-0">
        <button type="submit" class="btn btn-success py-2 px-3 rounded">
          Add
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useStore } from "@/store";
import { TodoItem } from "@/store/state";
import { MutationType } from "@/enum/index";

export default defineComponent({
  name: "todo-new-item",
  setup() {
    const text = ref("");
    const store = useStore();

    const createTask = () => {
      if (text.value === "") return;

      const item: TodoItem = {
        id: Date.now(),
        text: text.value,
        completed: false,
      };
      store.commit(MutationType.CreateItem, item);
      text.value = "";
    };
    return { createTask, text };
  },
});
</script>
<style scoped>
.todo-input:focus {
  outline: none;
}
.todo-input {
  border: none;
}
</style>
