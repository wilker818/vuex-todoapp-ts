<template>
  <div
    class="d-flex aling-items-center bg-white rounded shadow m-2 p-1"
    :class="completed ? 'todo-border--green' : 'todo-border--white'"
  >
    <div class="flex-shrink-0 ms-2">
      <input
        type="checkbox"
        :checked="completed"
        @change="toggleCompletion()"
      />
    </div>
    <div class="ms-4">
      <h4 class="mb-0">{{ text }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { useStore } from "vuex";
import { MutationType } from "@/enum/index";

export default defineComponent({
  name: "todo-item",
  props: {
    id: { type: Number, required: true },
    text: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  setup(props) {
    const store = useStore();

    const toggleCompletion = () => {
      store.commit(MutationType.CompleteItem, {
        id: props.id,
        completed: !props.completed,
      });
    };

    return { toggleCompletion };
  },
});
</script>
<style scoped>
.todo-border--green {
  border: 4px solid #48bb78;
}
.todo-border--white {
  border: 4px solid #fff;
}
</style>
