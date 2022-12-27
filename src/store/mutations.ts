import { MutationTree } from "vuex";

import { State, TodoItem } from "./state";
import { MutationType } from "../enum";

export type Mutations = {
  [MutationType.CreateItem](state: State, item: TodoItem): void;
  [MutationType.SetItems](state: State, items: TodoItem[]): void;
  [MutationType.CompleteItem](
    state: State,
    item: Partial<TodoItem> & { id: number }
  ): void;
  [MutationType.SetLoading](state: State, value: boolean): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationType.CreateItem](state, item) {
    state.items.unshift(item);
  },
  [MutationType.SetItems](state, items) {
    state.items = items;
  },
  [MutationType.CompleteItem](state, newItem) {
    const item = state.items.findIndex((s) => s.id === newItem.id);
    if (item === -1) return;
    state.items[item] = { ...state.items[item], ...newItem };
  },
  [MutationType.SetLoading](state, value) {
    state.loading = value;
  },
};
