<template>
  <div class="container mx-auto mt-4 bg-primary-subtle">
    <h2 class="text-center p-2 bold">
      Vue 3 Todo App with Typescript and Vuex 4
    </h2>

    <div v-if="loading">
      <h3 class="text-center mt-4">Loading...</h3>
    </div>
    <div v-else>
      <p class="text-center mt-2">
        {{ completedCount }} of {{ totalCount }} completed.
      </p>
      <NewItem />
      <TodoList />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

import NewItem from "@/components/NewItem.vue";
import TodoList from "@/components/TodoList.vue";

import { ActionTypes } from "@/enum/index";

export default defineComponent({
  name: "todo-home",
  components: {
    TodoList,
    NewItem,
  },
  setup() {
    const store = useStore();

    const loading = computed(() => store.state.loading);
    onMounted(() => store.dispatch(ActionTypes.GetTodoItems));

    const completedCount = computed(() => store.getters.completedCount);
    const totalCount = computed(() => store.getters.totalCount);

    return {
      loading,
      completedCount,
      totalCount,
    };
  },
});
</script>

<style scoped></style>
