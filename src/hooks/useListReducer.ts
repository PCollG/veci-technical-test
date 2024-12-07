import { useReducer } from "react";

type ListAction =
  | { type: "ADD_ITEM"; payload: string }
  | { type: "DELETE_ITEM"; payload: number[] }
  | { type: "SELECT_ITEM"; payload: number }
  | { type: "DESELECT_ITEM"; payload: number };

export type ListState = {
  items: string[];
  selectedIndexes: number[];
};

const actions = {
  ADD_ITEM: "ADD_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  SELECT_ITEM: "SELECT_ITEM",
  DESELECT_ITEM: "DESELECT_ITEM",
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
      const newSelectedIndexes = state.selectedIndexes.filter(
        (index) => !action.payload.includes(index)
      );
      return {
        ...state,
        items: newItems,
        selectedIndexes: newSelectedIndexes,
      };
    }
    case actions.SELECT_ITEM:
      if (!state.selectedIndexes.includes(action.payload)) {
        return {
          ...state,
          selectedIndexes: [...state.selectedIndexes, action.payload],
        };
      }
      return state;
    case actions.DESELECT_ITEM:
      return {
        ...state,
        selectedIndexes: state.selectedIndexes.filter(
          (index) => index !== action.payload
        ),
      };
    default:
      throw new Error(`Action type is not supported.`);
  }
};

export const useListReducer = (
  initialState: ListState = { items: [], selectedIndexes: [] }
): {
  state: ListState;
  addItem: (item: string) => void;
  deleteItem: (index: number[]) => void;
  selectItem: (index: number) => void;
  deselectItem: (index: number) => void;
} => {
  const [state, dispatch] = useReducer(listReducer, initialState);

  const addItem = (item: string) =>
    dispatch({ type: actions.ADD_ITEM, payload: item });
  const deleteItem = (indexArray: number[]) =>
    dispatch({ type: actions.DELETE_ITEM, payload: indexArray });
  const selectItem = (index: number) =>
    dispatch({ type: actions.SELECT_ITEM, payload: index });
  const deselectItem = (index: number) =>
    dispatch({ type: actions.DESELECT_ITEM, payload: index });

  return { state, addItem, deleteItem, selectItem, deselectItem };
};
