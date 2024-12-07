import { useReducer } from "react";

type ListAction =
  | { type: "ADD_ITEM"; payload: string }
  | { type: "DELETE_ITEM"; payload: number[] };

export type ListState = {
  items: string[];
};

const actions = {
  ADD_ITEM: "ADD_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
} as const;

const listReducer = (state: ListState, action: ListAction): ListState => {
  switch (action.type) {
    case actions.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case actions.DELETE_ITEM: {
      const newItems = state.items.filter(
        (_, index) => !action.payload.includes(index)
      );
      return {
        ...state,
        items: newItems,
      };
    }
    default:
      throw new Error(`Action type is not supported.`);
  }
};

export const useListReducer = (
  initialState: ListState = { items: [] }
): {
  state: ListState;
  addItem: (item: string) => void;
  deleteItem: (index: number[]) => void;
} => {
  const [state, dispatch] = useReducer(listReducer, initialState);

  const addItem = (item: string) =>
    dispatch({ type: actions.ADD_ITEM, payload: item });
  const deleteItem = (indexArray: number[]) =>
    dispatch({ type: actions.DELETE_ITEM, payload: indexArray });

  return { state, addItem, deleteItem };
};
