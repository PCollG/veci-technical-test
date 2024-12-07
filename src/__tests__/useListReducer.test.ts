import { renderHook, act } from "@testing-library/react";
import { useListReducer } from "../hooks/useListReducer";

describe("useListReducer", () => {
  it("debe agregar un ítem correctamente", () => {
    const { result } = renderHook(() => useListReducer());

    act(() => {
      result.current.addItem("Nuevo ítem");
    });

    expect(result.current.state.items).toContain("Nuevo ítem");
  });

  it("debe eliminar un ítem correctamente", () => {
    const { result } = renderHook(() =>
      useListReducer({
        items: ["Ítem 1", "Ítem 2"],
        selectedIndexes: [],
        undoStack: [],
      })
    );

    act(() => {
      result.current.deleteItem([0]);
    });

    expect(result.current.state.items).not.toContain("Ítem 1");
  });

  it("debe eliminar múltiples ítems correctamente", () => {
    const { result } = renderHook(() =>
      useListReducer({
        items: ["Ítem 1", "Ítem 2", "Ítem 3"],
        selectedIndexes: [],
        undoStack: [],
      })
    );

    act(() => {
      result.current.deleteItem([0, 2]);
    });

    expect(result.current.state.items).toEqual(["Ítem 2"]);
  });

  it("debe seleccionar un ítem correctamente", () => {
    const { result } = renderHook(() =>
      useListReducer({
        items: ["Ítem 1", "Ítem 2"],
        selectedIndexes: [],
        undoStack: [],
      })
    );

    act(() => {
      result.current.selectItem(1);
    });

    expect(result.current.state.selectedIndexes).toContain(1);
  });

  it("debe deseleccionar un ítem correctamente", () => {
    const { result } = renderHook(() =>
      useListReducer({
        items: ["Ítem 1", "Ítem 2"],
        selectedIndexes: [0],
        undoStack: [],
      })
    );

    act(() => {
      result.current.deselectItem(0);
    });

    expect(result.current.state.selectedIndexes).not.toContain(0);
  });

  it("debe deshacer una acción correctamente", () => {
    const { result } = renderHook(() => useListReducer());

    act(() => {
      result.current.addItem("Ítem 1");
    });

    act(() => {
      result.current.undo();
    });

    expect(result.current.state.items).not.toContain("Ítem 1");
  });

  it("debe manejar deshacer sin pila de deshacer", () => {
    const { result } = renderHook(() => useListReducer());

    act(() => {
      result.current.undo();
    });

    expect(result.current.state.items).toEqual([]);
    expect(result.current.state.selectedIndexes).toEqual([]);
    expect(result.current.state.undoStack).toEqual([]);
  });
});
