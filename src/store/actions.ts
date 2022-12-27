import { ActionContext, ActionTree } from "vuex";

import { State } from "./state";
import { Mutations } from "./mutations";
import { MutationType, ActionTypes } from "../enum";

type ActionAugments = Omit<ActionContext<State, State>, "commit"> & {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
};

export type Actions = {
  [ActionTypes.GetTodoItems](context: ActionAugments): void;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.GetTodoItems]({ commit }) {
    commit(MutationType.SetLoading, true);

    await sleep(1000);

    commit(MutationType.SetLoading, false);
    commit(MutationType.SetItems, [
      {
        id: 1,
        text: "Crie um App incrível Vue 3 com Vuex 4!",
        completed: false,
      },
    ]);
  },
};
