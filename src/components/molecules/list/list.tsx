import ListItem from "@atoms/listItem/listItem";
import style from "./list.module.scss";

type ListProps = {
  items: string[];
  selectedIndexes?: number[];
  deleteItem?: (index: number[]) => void;
  selectItem?: (index: number) => void;
  deselectItem?: (index: number) => void;
};

const List = ({
  items,
  selectedIndexes,
  deleteItem,
  selectItem,
  deselectItem,
}: ListProps) => {
  const handleClickItem = (index: number) => {
    if (selectedIndexes?.includes(index)) {
      deselectItem?.(index);
    } else {
      selectItem?.(index);
    }
  };

  return (
    <div className={style.listContainer}>
      <ul className={style.list}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            selected={selectedIndexes?.includes(index)}
            onClick={() => handleClickItem(index)}
            onDoubleClick={() => deleteItem?.([index])}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
