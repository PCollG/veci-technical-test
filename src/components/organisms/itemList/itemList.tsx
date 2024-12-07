import ModalAddItem from "@organisms/modalAddItem/modalAddItem";
import List from "@molecules/list/list";
import Button from "@atoms/button/button";

import styles from "./itemList.module.scss";

const ItemList = () => {
  const items = ["item 1", "item 2", "item 3"];

  return (
    <>
      <List items={items} />
      <div className={styles.buttonsWrapper}>
        <Button>Undo</Button>
        <Button>Delete</Button>
        <ModalAddItem
          trigger={
            <Button variant="secondary" style={{ marginLeft: "auto" }}>
              Add
            </Button>
          }
        />
      </div>
    </>
  );
};

export default ItemList;
