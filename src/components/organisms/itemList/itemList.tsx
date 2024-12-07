import ModalAddItem from "@organisms/modalAddItem/modalAddItem";
import List from "@molecules/list/list";
import Button from "@atoms/button/button";

import styles from "./itemList.module.scss";
import { useListReducer } from "@hooks/useListReducer";

const ItemList = () => {
  const { state, addItem, deleteItem } = useListReducer({
    items: ["item 1", "item 2", "item 3"],
  });

  const { items } = state;

  const handleAddItem = (item: string) => addItem(item);

  return (
    <>
      <List items={items} deleteItem={deleteItem} />
      <div className={styles.buttonsWrapper}>
        <Button>Undo</Button>
        <Button>Delete</Button>
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
