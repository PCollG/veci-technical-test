import { renderHook, act } from "@testing-library/react";
import { useListReducer } from "../hooks/useListReducer";

describe("useListReducer", () => {
  it("should add an item correctly", () => {
    const { result } = renderHook(() => useListReducer());

    act(() => {
      result.current.addItem("New item");
    });

    expect(result.current.state.items).toContain("New item");
  });

  it("should delete an item correctly", () => {
    const { result } = renderHook(() =>
      useListReducer({
        items: ["Item 1", "Item 2"],
        selectedIndexes: [],
        undoStack: [],
      })
    );

    act(() => {
      result.current.deleteItem([0]);
    });

    expect(result.current.state.items).not.toContain("Item 1");
  });

  it("should delete multiple items correctly", () => {
    const { result } = renderHook(() =>
      useListReducer({
        items: ["Item 1", "Item 2", "Item 3"],
        selectedIndexes: [],
        undoStack: [],
      })
    );

    act(() => {
      result.current.deleteItem([0, 2]);
    });

    expect(result.current.state.items).toEqual(["Item 2"]);
  });

  it("should select an item correctly", () => {
    const { result } = renderHook(() =>
      useListReducer({
        items: ["Item 1", "Item 2"],
        selectedIndexes: [],
        undoStack: [],
      })
    );

    act(() => {
      result.current.selectItem(1);
    });

    expect(result.current.state.selectedIndexes).toContain(1);
  });

  it("should deselect an item correctly", () => {
    const { result } = renderHook(() =>
      useListReducer({
        items: ["Item 1", "Item 2"],
        selectedIndexes: [0],
        undoStack: [],
      })
    );

    act(() => {
      result.current.deselectItem(0);
    });

    expect(result.current.state.selectedIndexes).not.toContain(0);
  });

  it("should undo an action correctly", () => {
    const { result } = renderHook(() => useListReducer());

    act(() => {
      result.current.addItem("Item 1");
    });

    act(() => {
      result.current.undo();
    });

    expect(result.current.state.items).not.toContain("Item 1");
  });

  it("should handle undo with an empty undo stack", () => {
    const { result } = renderHook(() => useListReducer());

    act(() => {
      result.current.undo();
    });

    expect(result.current.state.items).toEqual([]);
    expect(result.current.state.selectedIndexes).toEqual([]);
    expect(result.current.state.undoStack).toEqual([]);
  });
});
