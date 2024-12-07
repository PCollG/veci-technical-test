import { useReducer } from "react";

type ListAction = { type: "ADD_ITEM"; payload: string };

export type ListState = {
  items: string[];
};

const actions = {
  ADD_ITEM: "ADD_ITEM",
} as const;

const listReducer = (state: ListState, action: ListAction): ListState => {
  switch (action.type) {
    case actions.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      throw new Error(`Action type is not supported.`);
  }
};

export const useListReducer = (
  initialState: ListState = { items: [] }
): {
  state: ListState;
  addItem: (item: string) => void;
} => {
  const [state, dispatch] = useReducer(listReducer, initialState);

  const addItem = (item: string) =>
    dispatch({ type: actions.ADD_ITEM, payload: item });

  return { state, addItem };
};
