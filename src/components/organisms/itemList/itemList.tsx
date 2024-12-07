import ModalAddItem from "@organisms/modalAddItem/modalAddItem";
import List from "@molecules/list/list";
import Button from "@atoms/button/button";

import styles from "./itemList.module.scss";
import { useListReducer } from "@hooks/useListReducer";

const ItemList = () => {
  const { state, addItem, deleteItem, selectItem, deselectItem } =
    useListReducer({
      items: ["item 1", "item 2", "item 3"],
      selectedIndexes: [],
    });

  const { items, selectedIndexes } = state;

  const handleAddItem = (item: string) => addItem(item);

  return (
    <>
      <List
        items={items}
        selectedIndexes={selectedIndexes}
        deleteItem={deleteItem}
        selectItem={selectItem}
        deselectItem={deselectItem}
      />
      <div className={styles.buttonsWrapper}>
        <Button>Undo</Button>
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
