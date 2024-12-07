import { useReducer } from "react";

type ListAction =
  | { type: "ADD_ITEM"; payload: string }
  | { type: "DELETE_ITEM"; payload: number[] }
  | { type: "SELECT_ITEM"; payload: number }
  | { type: "DESELECT_ITEM"; payload: number }
  | { type: "UNDO"; payload: null };

export type ListState = {
  items: string[];
  selectedIndexes: number[];
  undoStack: ListState[];
};

const actions = {
  ADD_ITEM: "ADD_ITEM",
  DELETE_ITEM: "DELETE_ITEM",
  SELECT_ITEM: "SELECT_ITEM",
  DESELECT_ITEM: "DESELECT_ITEM",
  UNDO: "UNDO",
} as const;

const listReducer = (state: ListState, action: ListAction): ListState => {
  switch (action.type) {
    case actions.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        undoStack: [
          ...state.undoStack,
          {
            items: [...state.items],
            selectedIndexes: [],
            undoStack: [...state.undoStack],
          },
        ],
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
        undoStack: [
          ...state.undoStack,
          {
            items: [...state.items],
            selectedIndexes: [],
            undoStack: [...state.undoStack],
          },
        ],
        items: newItems,
        selectedIndexes: newSelectedIndexes,
      };
    }
    case actions.SELECT_ITEM:
      if (!state.selectedIndexes.includes(action.payload)) {
        return {
          ...state,
          undoStack: [...state.undoStack],
          selectedIndexes: [...state.selectedIndexes, action.payload],
        };
      }
      return state;
    case actions.DESELECT_ITEM:
      return {
        ...state,
        undoStack: [...state.undoStack],
        selectedIndexes: state.selectedIndexes.filter(
          (index) => index !== action.payload
        ),
      };
    case actions.UNDO: {
      if (state.undoStack.length === 0) return state;
      const previousState = state.undoStack[state.undoStack.length - 1];
      return {
        ...previousState,
        undoStack: state.undoStack.slice(0, -1),
      };
    }
    default:
      throw new Error(`Action type is not supported.`);
  }
};

export const useListReducer = (
  initialState: ListState = { items: [], selectedIndexes: [], undoStack: [] }
): {
  state: ListState;
  addItem: (item: string) => void;
  deleteItem: (index: number[]) => void;
  selectItem: (index: number) => void;
  deselectItem: (index: number) => void;
  undo: () => void;
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
  const undo = () => dispatch({ type: actions.UNDO, payload: null });

  return { state, addItem, deleteItem, selectItem, deselectItem, undo };
};
