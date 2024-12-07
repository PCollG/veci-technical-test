import ModalAddItem from "@organisms/modalAddItem/modalAddItem";
import List from "@molecules/list/list";
import Button from "@atoms/button/button";

import { useListReducer } from "@hooks/useListReducer";

import UndoIcon from "@assets/undo.svg?react";

import styles from "./itemList.module.scss";

const ItemList = () => {
  const { state, addItem, deleteItem, selectItem, deselectItem, undo } =
    useListReducer({
      items: [],
      selectedIndexes: [],
      undoStack: [],
    });

  const { items, selectedIndexes, undoStack } = state;

  const handleAddItem = (item: string) => addItem(item);

  return (
    <>
      <List
        items={items}
        selectedIndexes={selectedIndexes}
        selectItem={selectItem}
        deselectItem={deselectItem}
        deleteItem={deleteItem}
      />
      <div className={styles.buttonsWrapper}>
        {undoStack.length > 0 && (
          <Button onClick={() => undo()}>
            <UndoIcon className={styles.icon} />
          </Button>
        )}
        {selectedIndexes.length !== 0 && (
          <Button onClick={() => deleteItem(selectedIndexes)}>DELETE</Button>
        )}
        <ModalAddItem
          trigger={
            <Button variant="secondary" style={{ marginLeft: "auto" }}>
              Add
            </Button>
          }
          handleAddItem={handleAddItem}
        />
      </div>
    </>
  );
};

export default ItemList;
